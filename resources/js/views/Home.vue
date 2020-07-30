<template>
    <div class="characters">
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <label for="searchTxt">Search:</label>
                    <input id="searchTxt" v-model="searchTxt">
                </div>
            </div>
        </div>
        <div v-if="charactersFiltered">
            <ul class="row bg-light p-4">
                <router-link class="col-6 col-md-4" v-for="char in charactersFiltered" :key="char.id" :to="{ path: 'character/'+char.id }">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        {{char.name}}
                        <div class="image-parent">
                            <img :src="char.img" :alt="char.id"  class="img-fluid">
                        </div>
                    </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<style>
    .image-parent {
        max-width: 40px;
    }
</style>
<script>
    export default {
        data: function(){
            return {
                searchTxt:''
            }
        },
        computed: {
            charactersFiltered: function(){
                if(this.searchTxt === '')//only filter if search text exists
                    return this.characters;
                return this.characters.filter((char) => {
                    return char.name.toLowerCase().includes(this.searchTxt.toLowerCase());
                });
            },
            characters: function(){
                return this.$store.state.characters;
            },
        }
    }
</script>
