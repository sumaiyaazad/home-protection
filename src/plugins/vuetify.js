import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.cyan.lighten3,
                secondary: colors.lightBlue.darken4,
                accent: colors.cyan.lighten4,
                error: '#FF5252',
                success: '#4CAF50',
                warning: '#FFC107',
            },
        },
    },
});
