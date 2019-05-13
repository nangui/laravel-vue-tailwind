<template>
    <div>
        <h1>Projects stats</h1>
        <p>Projects: {{ projects }}</p>
        <p>Unit price: {{ cost }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: 0,
            cost: 0
        };
    },
    created() {
        axios.get('http://localhost:8000/api/tests')
            // You can use this
            // .then(({ data }) => {
            //     let { projects, cost } = data;

            //     this.projects = data.projects;
            //     this.cost = data.unit_cost;
            // });
            .then(response => response.data)
            .then(data => {
                let { projects, cost } = data;

                this.projects = data.projects;
                this.cost = data.unit_cost;
            });
    }
};
</script>
