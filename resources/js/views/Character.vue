<template>
    <div>
        <div v-if="char !== undefined" class="card mx-auto" style="width: 18rem;">
            <img class="card-img-top" :src="char.img" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{char.name}}</h5>
                <p class="card-text">Status:{{char.status}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            char: function(){
                return this.$store.getters.getCharById(this.$route.params.id)
            },
        }
    }
</script>
