<template>
    <div class="notes">

        <div class="card shadow">
            <table class="table">
                <thead class="bg-light">
                    <tr>
                        <th scope="col" class="w-25">User</th>
                        <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="note in notes">
                        <td><i class="fas fa-user"></i> {{note.creator}}</th>
                        <td>{{note.content}}</td>
                        <td>
                            <button @click="deleteNote(note)" class="btn btn-danger shadow">Delete</button>
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
            notes() {
                return this.$store.state.notes;
            }
        },
        methods: {
            setActiveNote(notes) {
                this.activeNote = notes;
            },
            deleteNote(note){
                this.$store.dispatch('deleteNote', note)
            }
        }
    }
</script>


<style>
</style>