<template>
    <div class="row">
         <div class="col-md-12">
            <b-table striped hover :items="blogs" :fields="fields">
                <template #cell(created)="data">
                    {{ format_date(data.value)}}
                </template>
            </b-table>
        </div>
    </div>
</template>
<script>
import moment from 'moment';
import {mapState} from "vuex";

export default {
    name: "BlogComponent",
    data() {
        return {
            fields: [{key:'name',label:"Title"}, 'slug', 'created'],
        }
    },methods: {
        format_date(value){
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY');
            }
        },
    },computed: mapState(['blogs']),
    created() {
        this.$store.dispatch('loadBlogs');
    }
}
</script>