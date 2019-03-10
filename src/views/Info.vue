<template>
    <div class="info container-fluid">
        <form @submit.prevent="makeNote">
            <div class="form-group">
                <input v-model="newNote.content" type="text" placeholder="Write note" required>
            </div>
            <div class="form-group">
                <input v-model="newNote.creator" type="text" placeholder="Your name" required>
            </div>
            <button type="submit" class="btn btn-primary m-3 shadow">Post</button>
        </form>
        <div class="card d-flex shadow">
            <div class="card-body text-left">
                <h5 class="card-title"><b>{{bugs.title}}</b></h5>
                <h6 class="card-subtitle mb-2 text-muted">Reported by: {{bugs.creator}}</h6>
                <p class="card-text">{{bugs.description}}</p>
            </div>
        </div>
        <notes></notes>

    </div>
</template>

<script>
    import Bugs from '@/components/Bugs.vue'
    import Notes from '@/components/Notes.vue'
    export default {
        name: 'Info',
        props: ['id'],
        mounted() {
            this.$store.dispatch('getBugs')
        },
        data() {
            return {
                newNote: {
                    creator: "",
                    content: ""
                }
            }
        },
        computed: {
            bugs() {
                return this.$store.state.bugs.find(bug => bug.ndb_no == this._id) || {}
            }
        },
        methods: {
            makeNote() {
                console.log(this.newNote)
                this.$store.dispatch("addNote", this.newNote);
            }
        },
        components: {
            Bugs,
            Notes
        }
    }
</script>