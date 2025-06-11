import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Drawer from 'primevue/drawer'
import Menu from 'primevue/menu';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext'
import Breadcrumb from 'primevue/breadcrumb';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';   
import Select from 'primevue/select'
import Tooltip from 'primevue/tooltip';
import Dialog from 'primevue/dialog'
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag'
import Message from 'primevue/message'
import Timeline from 'primevue/timeline';
import Panel from 'primevue/panel'

import ToastService from 'primevue/toastservice';
import 'primeicons/primeicons.css'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)
dom.watch();

const app = createApp(App);
app.use(PrimeVue, {
    ripple: true,
    theme: {
        preset: Aura
    }
});
app.component("font-awesome-icon", FontAwesomeIcon)
app.component('Timeline', Timeline)
app.component('Panel', Panel)
app.component('Dialog', Dialog)
app.component('Message', Message)
app.component('Tag', Tag)
app.component('Avatar', Avatar)
app.directive('tooltip', Tooltip);
app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('Drawer', Drawer)
app.component('Menu', Menu)
app.component('IconField', IconField)
app.component('InputIcon', InputIcon)
app.component('InputText', InputText)
app.component('Breadcrumb', Breadcrumb)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('Select', Select)
app.use(ToastService)
app.use(router).mount('#app')

