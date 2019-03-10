<template>
    <div class="notes">

        <div class="card shadow">
            <table class="table">
                <thead class="bg-light">
                    <tr>
                        <th scope="col" class="w-25">User</th>
                        <th scope="col">Message</th>
                        <th scope="col">
                            <button class="btn btn-success shadow">Add</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="note in notes">
                        <td>{{note.creator}}</th>
                        <td>(MESSAGE)</td>
                        <td>
                            <button class="btn btn-danger shadow">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'notes',
        props: ['noteData'],
        data() {
            return {
                activeNote: {}
            }
        },
        computed: {
            results() {
                return this.$store.state.notes
            }
        },
        methods: {
            setActiveNote(notes) {
                this.activeNote = notes;
            }
        }
    }
</script>


<style>
</style>