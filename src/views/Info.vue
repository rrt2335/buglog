<template>
    <div class="info">
        <button class="btn btn-warning">
            <router-link to="/"><i class="fas fa-angle-left"></i></router-link>
        </button>
        <div class="card d-flex m-3">
            <div class="card-body text-left">
                <h5 class="card-title">User Authentication</h5>
                <h6 class="card-subtitle mb-2 text-muted">Reported by: USER</h6>
                <p class="card-text">This is where the bug's description will go.</p>
            </div>
            <button type="submit" class="btn btn-warning shadow m-4">Close</button>
        </div>
        <div class="card m-3 text-left">
            <div class="card-header">User</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">(USER NAME)</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'info',
        components: {

        }
    }
</script>