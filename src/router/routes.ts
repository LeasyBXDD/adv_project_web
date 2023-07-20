

const route: Array<any> = [

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
                path: 'result',
                name: 'VoiceprintResult',
                component: () => import('../components/voiceprint/VoiceprintResult.vue')
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