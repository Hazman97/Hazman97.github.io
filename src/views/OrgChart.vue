<template>
  <div>
    <organization-chart :datasource="ds"></organization-chart>
  </div>
</template>

<script>
import OrganizationChart from 'vue3-organization-chart'
import 'vue3-organization-chart/dist/orgchart.css'

export default {
  components: {
    OrganizationChart
  },
  data() {
    return {
      employees: [
        { id: '1', name: 'Hazman', position: 'CEO' },
        { id: '2', name: 'Hamid', refer_to: 'Hazman' },
        // Add more employees as needed
      ],
      hierarchy: [
        { id: '1', children: ['2'] },
        // Add more hierarchical relationships as needed
      ],
      ds: {}
    }
  },
  created() {
    // Constructing the datasource based on the provided data
    this.ds = {
      id: '1',
      name: this.employees.find(employee => employee.position === 'CEO').name,
      title: this.employees.find(employee => employee.position === 'CEO').position,
      children: this.getChildren('1')
    }
  },
  methods: {
    getChildren(id) {
      const childrenIds = this.hierarchy.find(entry => entry.id === id).children
      const children = childrenIds.map(childId => {
        const employee = this.employees.find(employee => employee.id === childId)
        return {
          id: employee.id,
          name: employee.name,
          title: employee.position,
          children: this.getChildren(employee.id) // Recursively get children
        }
      })
      return children
    }
  }
}
</script>
