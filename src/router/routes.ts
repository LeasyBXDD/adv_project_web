import type { RouteRecordRaw } from 'vue-router';

const route: Array<RouteRecordRaw> = [

    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/login/:name',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/voiceprint',
        name: 'Voiceprint',
        component: () => import('../views/Voiceprint.vue'),
        children: [
            {
                path: 'submit/:stage',  
                component: () => import('../components/voiceprint/VoiceprintSubmit.vue')
            },
            {
                path: 'submit',
                name: 'VoiceprintSubmit',
                redirect: 'submit/stage-submit'
            },
            {
                path: 'history',
                name: 'VoiceprintHistory',
                component: () => import('../components/voiceprint/VoiceprintHistory.vue')
            },
            {
                path: 'result/:id',
                name: 'VoiceprintResult',
                component: () => import('../components/voiceprint/VoiceprintResult.vue')
            }
        ]
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('../views/User.vue'),
        children: [
            {
                path: '',
                name: 'EditProfile',
                component: () => import('../components/userInfo/EditProfile.vue')
            },
            {
                path: 'security-center',
                name: 'SecurityCenter',
                component: () => import('../components/userInfo/SecurityCenter.vue')
            }
        ]
    },
    {
        path: '/notFound',
        name: 'NotFound',
        component: () => import('../views/404.vue')
    }

]





export default route;