import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import 'element-ui/packages/theme-chalk/lib/index.css';
import {
  Button,
  Select,
  Form,
  FormItem,
  Input,
  Card,
  Alert,
  Option,
  Radio,
  RadioGroup,
  Dialog
} from 'element-ui';

const elements = [Button,
  Select,
  Form,
  FormItem,
  Input,
  Card,
  Alert,
  Option,
  Radio,
  RadioGroup,
  Dialog
];
locale.use(lang);
elements.forEach(El => Vue.use(El, {locale}));



