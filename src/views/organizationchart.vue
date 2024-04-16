<template>
  <div>
    <h1
      style="
        background-color: #032539;
        color: #fef9ef;
        text-align: center;
        padding: 1rem;
        font-size: 1.5em;
        z-index: 1;
      "
    >
      Organization Chart
    </h1>
    <div class="space-x-3 p-1 relative space-y-1 ">
      <button
        class="border rounded-lg p-1.5 border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
        @click="fitChart"
      >
        Fit to the screen
      </button>

      <button
        class="border rounded-lg p-1.5 border-gray-500border rounded-lg p-2 border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
        @click="cycleLayout"
      >
        Change Layout
      </button>

      <button
        class="border rounded-lg p-1.5 border-gray-500border rounded-lg p-2 border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
        @click="fullscreen"
      >
        Full Screen
      </button>
      <button
        class="border rounded-lg p-1.5 border-gray-500border rounded-lg p-2 border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
        @click="expandAllNodes"
      >
        Expand All
      </button>
      <button
        class="border rounded-lg p-1.5 border-gray-500border rounded-lg p-2 border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
        @click="collapseAllNodes"
      >
      Collapse All
      </button>
        <!-- Export buttons -->
        <button class="border rounded-lg p-1.5 border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
              @click="exportCurrentImage"
      >
        Export Current
      </button>

      <button class="border rounded-lg p-1.5 border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
              @click="exportFullImage"
      >
        Export Full
      </button>

      <button class="border rounded-lg p-1.5 border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
              @click="exportSvg"
      >
        Export SVG
      </button>

      <button class="border rounded-lg p-1.5 border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
              @click="exportPdf"
      >
        Export PDF
      </button>
      <button @click="showAddNodeModal" class="bg-[#032539] hover:bg-[#032539c7] text-[#FBF3F2] border rounded-lg p-1.5">
      Add Node to Root
    </button>
      <div class="flex pt-1 search:right-2 search:top-2 search:absolute">
         <input class="p-2  rounded "
      type="text"
      placeholder="Search..."
      v-model="searchQuery"
      @input="filterChart"
    />
      </div>
     
    </div>
    <div v-if="isAddNodeModalOpen" class="modal fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center " @click.self="closeAddNodeModal">
      <div class="modal-content bg-white rounded-lg p-8">
        <span @click="closeAddNodeModal" class="close absolute top-0 right-0 mt-4 mr-4 text-gray-600 cursor-pointer">&times;</span>
        <h2 class="text-xl font-bold mb-4">Add Node</h2>
        <div class="mb-4">
          <label for="nodeId" class="block text-gray-700 font-bold mb-2">Node ID:</label>
          <input type="text" id="nodeId" v-model="newNode.id" class="border rounded-md px-4 py-2 w-full">
        </div>
        <div class="mb-4">
          <label for="nodeName" class="block text-gray-700 font-bold mb-2">Node Name:</label>
          <input type="text" id="nodeName" v-model="newNode.name" class="border rounded-md px-4 py-2 w-full">
        </div>
        <div class="mb-4">
          <label for="nodeName" class="block text-gray-700 font-bold mb-2">Parent Id:</label>
          <input type="text" id="nodeNameda" v-model="newNode.parentId" class="border rounded-md px-4 py-2 w-full">
        </div>
        <!-- Add more input fields for other properties if needed -->
        <button @click="addNodeToRoot" class="bg-[#FA991C] hover:bg-[#FA991C] text-white font-bold py-2 px-4 rounded">
          Add Node
        </button>
      </div>
    </div>

    <div ref="chartContainer">
      
    </div>
  </div>
</template>

<script>
import { OrgChart } from 'd3-org-chart'
// import axios from 'axios'
import employeesData from '../views/data'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


export default {
  name: 'TestComponent',
  data() {
    return {
      isAddNodeModalOpen: false,
      newNode: {
        id: '',
        name: '',
        parentId:'',
        // Add more properties as needed
      },
      data: [],
      chartReference: null,
      layoutIndex: 0,
      layoutPositions: ['top', 'right', 'left', 'bottom'],
      isFullscreen: false,
      highlightedNodeId: null,
      searchQuery: '',
      isChartMinimized: false, 
      chart: null,
      
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      //   axios
      //     .get('http://localhost:3000/employees')
      //     .then((response) => {
      //       console.log('Fetched data:', response.data)
      //       this.data = response.data
      //       this.renderChart()
      //     })
      //     .catch((error) => {
      //       console.error('Error fetching data:', error)
      //     })
      // },
      Promise.resolve(employeesData)
        .then((data) => {
          console.log('Fetched data:', data)
          this.data = data
          this.renderChart()
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    },
    renderChart() {
      if (!this.chartReference) {
        this.chartReference = new OrgChart();
      }
      this.chartReference
        .container(this.$refs.chartContainer)
        .data(this.data)
        .nodeHeight(() => 85 + 25)
        .nodeWidth(() => 220 + 2)
        .childrenMargin(() => 50)
        .compactMarginBetween(() => 35)
        .compactMarginPair(() => 30)
        .neighbourMargin(() => 20)
        .nodeContent((d) => {
          const color = '#FFFFFF';
          const imageDiffVert = 25 + 2;
          return `
            <div style='width:${d.width}px;height:${d.height}px;padding-top:${imageDiffVert - 2}px;padding-left:1px;padding-right:1px'>
              <div style="font-family: 'Inter', sans-serif;background-color:${color};margin-left:-1px;width:${d.width - 2}px;height:${d.height - imageDiffVert}px;border-radius:10px;border: ${this.highlightedNodeId === d.data.id ? '5px solid #E27396' : '1px solid #E4E2E9'}">
                <div style="display:flex;justify-content:flex-end;margin-top:5px;margin-right:8px">#${d.data.id}</div>
                <div style="background-color:${color};margin-top:${-imageDiffVert - 20}px;margin-left:${15}px;border-radius:100px;width:50px;height:50px;"></div>
                <div style="margin-top:${-imageDiffVert - 20}px;"><img src="${d.data.imageUrl}" style="margin-left:${20}px;border-radius:100px;width:40px;height:40px;" /></div>
                <div style="font-size:15px;color:#08011E;margin-left:20px;margin-top:10px">${d.data.name}</div>
                <div style="color:#716E7B;margin-left:20px;margin-top:3px;font-size:10px;">${d.data.department}</div>
                <div style="color:#716E7B;margin-left:10px;margin-top:10px;font-size:6px;">${d.data.description}</div>
              </div>
            </div>
          `;
        })
        .layout(this.layoutPositions[this.layoutIndex])
        .render();
        console.log("Chart rendered:", this.chartReference);
    },
    fitChart() {
      if (this.chartReference) {
        this.chartReference.fit()
      }
    },
    cycleLayout() {
      this.layoutIndex = (this.layoutIndex + 1) % this.layoutPositions.length

      this.renderChart()
    },
    fullscreen() {
      const chartContainer = this.$refs.chartContainer
      if (!this.isFullscreen) {
        if (chartContainer.requestFullscreen) {
          chartContainer.requestFullscreen()
        } else if (chartContainer.mozRequestFullScreen) {
          /* Firefox */
          chartContainer.mozRequestFullScreen()
        } else if (chartContainer.webkitRequestFullscreen) {
          /* Chrome, Safari & Opera */
          chartContainer.webkitRequestFullscreen()
        } else if (chartContainer.msRequestFullscreen) {
          /* IE/Edge */
          chartContainer.msRequestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          /* Firefox */
          document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
          /* Chrome, Safari & Opera */
          document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) {
          /* IE/Edge */
          document.msExitFullscreen()
        }
      }
      this.isFullscreen = !this.isFullscreen
    },
    toggleHighlight(nodeId) {
      if (this.highlightedNodeId === nodeId) {
        this.clearHighlighting()
      } else {
        this.setHighlighted(nodeId)
      }
    },
    setHighlighted(nodeId) {
      // Your code to highlight the specified node
      // Example:
      // Update node class, change color, etc.
      this.highlightedNodeId = nodeId
      // Trigger re-rendering of the chart
      this.renderChart()
    },
    clearHighlighting() {
      // Your code to clear highlighting
      // Example:
      // Reset all nodes to default state
      this.highlightedNodeId = null
      // Trigger re-rendering of the chart
      this.renderChart()
    },
    filterChart(event) {
  const value = event.target.value.toLowerCase();
  const chart = this.chartReference;

  // Clear previous highlighting
  chart.clearHighlighting();

  // Get chart nodes
  const data = chart.data();
  let foundNode = null;

  // Un-minimize the chart if it's currently minimized
 

  // Loop over data and check if input value matches any name
  data.forEach((d) => {
    if (value !== '' && d.name && d.name.toLowerCase().includes(value)) {
      // If matches, mark node as highlighted
      d._highlighted = true;
      d._expanded = true;
      // Keep track of the first matching node found
      if (!foundNode) {
        foundNode = d;
      }
    }
  });

  // Update data and re-render the chart
  chart.data(data).render().fit();

  // If a matching node is found, navigate to it
  if (foundNode) {
    // Delay focusing on the node to ensure it's rendered
    setTimeout(() => {
      const nodeElement = document.querySelector(`[data-node-id="${foundNode.id}"]`);
      if (nodeElement) {
        nodeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }
    }, 200); // Adjust delay as needed
  }
},
expandAllNodes() {
  if (this.chartReference) {
    this.chartReference.expandAll().fit();
  }
},
collapseAllNodes() {
  if (this.chartReference) {
    this.chartReference.collapseAll().fit();
  }
},
exportCurrentImage() {
  console.log("Exporting current image...");
  if (this.chartReference) {
    this.chartReference.exportImg({
      save: true,
      format: 'png',
      quality: 1,
      full: false,
      background: '#ffffff',
      width: null,
      height: null,
      filename: 'chart',
      style: {
        'font-family': 'Arial',
        'font-size': '12px',
        'text-align': 'left',
        'background-color': '#ffffff',
      },
    });
  }
},

exportFullImage() {
  console.log("Exporting full image...");
  if (this.chartReference) {
    this.chartReference.exportImg({
      save: true,
      format: 'png',
      quality: 1,
      full: true,
      background: '#ffffff',
      width: null,
      height: null,
      filename: 'chart',
      style: {
        'font-family': 'Arial',
        'font-size': '12px',
        'text-align': 'left',
        'background-color': '#ffffff',
      },
    });
  }
},
exportSvg() {
  if (this.chartReference) {
    this.chartReference.exportSvg();
  }
},
exportPdf() {
  const chartContainer = this.$refs.chartContainer;

  if (chartContainer) {
    html2canvas(chartContainer).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF();
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
      pdf.save('chart.pdf');
    });
  }


},
showAddNodeModal() {
      this.isAddNodeModalOpen = true;
    },
    closeAddNodeModal() {
      this.isAddNodeModalOpen = false;
    },
    addNodeToRoot() {
      if (this.chartReference) {
        // Call the method to add a node to the root with the values from the form
        this.chartReference.addNode(this.newNode).render();
        // Reset the form values
        this.newNode = {
          id: '',
          name: '',
          parentId: '',
          // Reset other properties as needed
        };
        // Close the modal
        this.closeAddNodeModal();
      }
    }






  }
}
</script>

<!-- Add any necessary styles for your chart container -->
<style scoped>
.chart-container {
  /* Define styles for your chart container */
}
</style>
