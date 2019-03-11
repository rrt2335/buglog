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
                    <tr @click="setActiveBug(bug), $router.push({name: 'info', params:{id: bug._id}})" v-for="bug in bugs" class="bug-slots text-white" :class="{'bg-success': !bug.closed, 'bg-danger': bug.closed}">
                        <td class="w-25">{{bug.createdAt | formatTime}}</th>
                        <td>{{bug.title}}</td>
                        <td><i class="fas fa-user"></i> {{bug.creator}}</td>
                        <td v-if="!bug.closed">Active</td>
                        <td v-else-if="bug.closed">Closed</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
    import Moment from 'moment'
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
                this.$store.dispatch('setActiveBug', bug)
            }
        },
        filters: {
            formatTime(date) {
                return Moment(String(date)).format('MM/DD/YYYY, LT')
            }
        }
    }
</script>


<style>
    .bug-slots:hover {
        cursor: pointer;
        box-shadow: 0 0 20px white;
    }
</style>