<template>
    <div class="info container-fluid">

        <div class="card d-flex shadow">
            <div class="card-body text-left">
                <h6 class="card-text" id="active" v-if="!bugs.closed"><b>Active</b></h6>
                <h6 class="card-text" id="inactive" v-else-if="bugs.closed"><b>Closed</b></h6>
                <h4 class="card-title"><b>{{bugs.title}}</b></h4>
                <h6 class="card-subtitle mb-2 text-muted">Reported by: {{bugs.creator}}</h6>
                <p class="card-text">{{bugs.description}}</p>
                <p class="card-text footer">Last updated on: {{bugs.updatedAt | formatTime}}<br>Created on:
                    {{bugs.createdAt | formatTime}}</p>
            </div>
        </div>
        <router-link to="/"><button class="btn m-3 btn-primary shadow">
                Go back</button></router-link>
        <button v-show="!bugs.closed" @click="confirmClose" class="btn btn-danger shadow">Mark as completed</button>

        <form v-show="!bugs.closed" @submit.prevent="makeNote">
            <div class="form-group text-left">
                <label>Type your name below:</label>
                <input v-model="newNote.creator" class="form-control shadow" type="text" placeholder="Name..." required>
            </div>
            <div class="form-group text-left">
                <label>Write a note in response to this bug:</label>
                <input v-model="newNote.content" class="form-control shadow" id="exampleInput" type="text"
                    placeholder="Your note..." required>
            </div>
            <button type="submit" class="btn btn-warning m-2 shadow">Post</button>
            <button type="reset" class="btn btn-outline-warning m-2 shadow">Clear</button>
        </form>
        <notes></notes>

    </div>
</template>

<script>
    import Bugs from '@/components/Bugs.vue'
    import Notes from '@/components/Notes.vue'
    import Moment from 'moment'
    export default {
        name: 'Info',
        props: ['id'],
        mounted() {
            if (this.$store.state.bugs.length == 0) {
                this.$store.dispatch('getActiveBug')
            }
            this.$store.dispatch('getBug', this.id),
            this.$store.dispatch('getNotes', this.id)
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
            },
            confirmClose() {
                if (confirm("Are you sure you want to close this bug? This cannot be undone.")) {
                    this.$store.dispatch("closeBug", this.bugs)
                }
            }
        },
        components: {
            Bugs,
            Notes
        },
        filters: {
            formatTime(date) {
                return Moment(String(date)).format('MM/DD/YYYY, LT')
            }
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

    #active {
        color: rgb(3, 189, 3);
    }

    #inactive {
        color: red;
    }
</style>