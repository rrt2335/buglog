<template>
    <div class="notes">

        <router-link to="/"><button class="btn m-3 btn-warning shadow">
                Go back</button></router-link>
        <button @click="confirmClose" class="btn btn-danger shadow">Close bug</button>

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
                    <tr>
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
            },
            confirmClose() {
                confirm("Are you sure you want to close this bug? This cannot be undone.")
            }
        }
    }
</script>


<style>
</style>