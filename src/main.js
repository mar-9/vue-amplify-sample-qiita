import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import {  
  applyPolyfills,
  defineCustomElements
} from '@aws-amplify/ui-components/loader'

Amplify.configure(aws_exports)
applyPolyfills().then(() => {
  defineCustomElements(window)
})
let languageDict = {
    ja:{
        'Sign in to your account' : 'アカウントにサインイン',
        'Username *' : 'ユーザ名 *',
        'Enter your username' : 'ユーザ名を入力してください',
        'Password *' : 'パスワード *',
        'Enter your password' : 'パスワードを入力してください',
        'Forgot your password?' : 'パスワードを忘れた場合',
        'Reset password' : 'パスワードのリセット',
        'No account?' : 'まだアカウントがない場合',
        'Create account' : 'アカウント作成',
        'Sign In' : 'サインイン',
    }
}
Amplify.I18n.putVocabularies(languageDict)
createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).mount('#app')
