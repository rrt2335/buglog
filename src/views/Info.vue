<template>
    <div class="info container-fluid">
        <form @submit.prevent="makeNote">
            <div class="form-group text-left">
                <label>Write your name below:</label>
                <input v-model="newNote.creator" class="form-control shadow" type="text" placeholder="Name..." required>
            </div>
            <div class="form-group text-left">
                <label>Provide a note in response to this bug:</label>
                <input v-model="newNote.content" class="form-control shadow" id="exampleInput" type="text"
                    placeholder="Your note..." required>
            </div>
            <button type="submit" class="btn btn-primary m-2 shadow">Post</button>
        </form>
        <div class="card d-flex shadow">
            <div class="card-body text-left">
                <h6 class="card-text" id="status"><b>Active</b></h6>
                <h4 class="card-title"><b>{{bugs.title}}</b></h4>
                <h6 class="card-subtitle mb-2 text-muted">Reported by: {{bugs.creator}}</h6>
                <p class="card-text">{{bugs.description}}</p>
                <p class="card-text footer">Last updated on: {{bugs.updatedAt}}<br>Created on: {{bugs.createdAt}}</p>
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
                return this.$store.state.activeBug || {}
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

<style>
    .footer {
        font-size: 12px;
    }

    #exampleInput {
        height: 75px;
    }
    #status{
        color: rgb(3, 189, 3);
    }
</style>