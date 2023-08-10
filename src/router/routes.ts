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
                component: () => import('../components/voiceprint/VoiceprintSubmit.vue'),
                meta: {
                    keepAlive: true
                }
            },
            {
                path: 'submit',
                name: 'VoiceprintSubmit',
                redirect: 'submit/stage-submit',
                meta: {
                    keepAlive: true
                }
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
        path: '/evalution/:id',
        name: 'Evalution',
        component: () => import('../views/Evalution.vue')
    },
    {
        path: '/notFound',
        name: 'NotFound',
        component: () => import('../views/404.vue')
    },
    {
        path: '/manager',
        name: 'Manager',
        component: () => import('@/views/Manager.vue'),
        children: [
            {
                path: '',
                name: 'ManageHome',
                component: () => import('@/components/manager/ManageHome.vue'),
                meta: {
                    key: 0
                }
            },
            {
                path: 'manage-history',
                name: 'ManageHistory',
                component: () => import('@/components/manager/ManageHistory.vue'),
                meta: {
                    key: 1
                }
            }
        ]
    }

]




export default route;