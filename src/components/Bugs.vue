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
                    <tr @click="setActiveBug(bug)" v-for="bug in bugs" class="bug-slots bg-success text-white">
                        <td class="w-25">{{bug.createdAt}}</th>
                        <td>{{bug.title}}</td>
                        <td><i class="fas fa-user"></i> {{bug.creator}}</td>
                        <td>Active
                            <router-link :to="{name: 'info', params: {_id: bug.ndb_no}}">
                               Details</router-link>
                        </td>
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
            setActiveBug(bug) {
                this.activeBug = bugs;
            }
        }
    }
</script>


<style>
    .bug-slots:hover{
        cursor: pointer;
        box-shadow: 0 0 20px white;
    }
</style>