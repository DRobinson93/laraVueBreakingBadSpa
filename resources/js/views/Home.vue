<template>
    <div class="characters">
        <div class="container">
            <div class="card">
                <div class="card-body m-1 row">
                    <div class="col-6">
                        <input id="searchTxt" v-model="searchTxt" class="form-control form-control-sm" placeholder="Search">
                    </div>
                    <div class="col-6 row">
                        <div class="col-6">
                            <input type="checkbox" id="breakingBadChecked" v-model="breakingBadChecked">
                            <label for="breakingBadChecked">Breaking Bad</label>
                        </div>
                        <div class="col-6">
                            <input type="checkbox" id="BetterCallSaul" v-model="betterCallSaulChecked">
                            <label for="BetterCallSaul">Better Call Saul</label>
                        </div>
                    </div>
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
                searchTxt:'',
                breakingBadChecked:true,
                betterCallSaulChecked:true,
            }
        },
        computed: {
            charactersFiltered: function(){
                let chars = this.characters;
                if(!this.betterCallSaulChecked){
                    chars = this.$store.getters.getCharByCategory('Breaking Bad');
                }else if(!this.breakingBadChecked){
                    chars = this.$store.getters.getCharByCategory('Breaking Bad, Better Call Saul');
                }
                if(this.searchTxt === '')//only filter if search text exists
                    return chars;
                return chars.filter((char) => {
                    return char.name.toLowerCase().includes(this.searchTxt.toLowerCase());
                });
            },
            characters: function(){
                return this.$store.state.characters;
            }
        }
    }
</script>
