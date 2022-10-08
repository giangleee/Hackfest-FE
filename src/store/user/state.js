import { deepFreeze } from "@/utils/function";

export default deepFreeze({
  contactDetail: {
    name: '',
    email: '',
    password: '',
    content: '',
  },
  loginDetail: {
    email: '',
    password: '',
  },
  registerDetail: {
    email: '',
    password: '',
    name: ''
  }
});
