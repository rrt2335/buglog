<template>
    <div class="notes">
        <div class="card d-flex shadow">
            <div class="card-body text-left">
                <h5 class="card-title"><b>(BUG TITLE)</b></h5>
                <h6 class="card-subtitle mb-2 text-muted">Reported by: (USER NAME)</h6>
                <p class="card-text">This is where the bug's description will go.</p>
            </div>
        </div>
        <router-link to="/"><button class="btn m-3 btn-warning">
            Close</button></router-link>


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
                    <tr class="bg-success text-white">
                        <td>(USER NAME)</th>
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
        data() {
            return {
                activeNote: {}
            }
        },
        computed: {
            results() {
                return this.$store.state.activeNote
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