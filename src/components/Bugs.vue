<template>
    <div class="bugs">
        <div class="card shadow">
            <table class="table">
                <thead class="bg-light">
                    <tr>
                        <th scope="col">Date created</th>
                        <th scope="col">Title</th>
                        <th scope="col">Reported by</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="bug in bugs" class="bg-success text-white">
                        <td class="w-25">(DATE)</th>
                        <td>((DATE))</td>
                        <td>{{bug.title}}</td>
                        <td>(STATUS)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Bugs',
        props: ['bugData'],
        data() {
            return {
                activeBug: {}
            }
        },
        computed: {
            bugs() {
                return this.$store.state.bugs
            }
        },
        methods: {
            setActiveBug(bugs) {
                this.activeBug = bugs;
            }
        }
    }

</script>


<style>

</style>