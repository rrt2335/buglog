<template>
    <div class="info container-fluid">
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
            if (this.$store.state.bugs.length == 0) {
                this.$store.dispatch('getBugs')
            }
        },
        data() {
            return {

            }
        },
        computed: {
            bugs() {
                return this.$store.state.bugs.find(bug => bug.ndb_no == this.id) || {}
            }
        },
        methods: {},
        components: {
            Bugs,
            Notes
        }
    }
</script>