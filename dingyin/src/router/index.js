import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
    // permission:'VIP'    权限
    // redirect: '/404'   重定向
    routes: [
        {
            path: '/',
            name : '首页',
            component: () => import('@/views/home/index.vue'),
            meta: { title: '鼎音大数据平台' ,},

        },
        {
            path: '/workbench',
            name: '总工作台',
            redirect : '/workbenchpagehome',
            component: () => import('@/views/workbench/index.vue'),
            meta: { title: '个人中心功能预览',},
            children : [
                // ------------------------个人中心功能预览------------------------
                {
                    path: '/workbenchpagehome',
                    component: () => import('@/views/workbench_page/home'),
                    meta: { title: '个人中心功能预览'},
                },
                // ------------------------工具------------------------
                {
                    path: '/videosdewatering',
                    component: () => import('@/views/workbench_page/tool/videos_tool/videos_dewatering/index'),
                    meta: { title: '视频去水印'},
                },
                {
                    path: '/extractvideo',
                    component: () => import('@/views/workbench_page/tool/videos_tool/extract_video/index'),
                    meta: { title: '提取视频'},
                },
                {
                    path: '/shortvideo',
                    component: () => import('@/views/workbench_page/tool/videos_tool/short_video/index'),
                    meta: { title: '短视频素材库'},
                },

                {
                    path: '/accountvaluation',
                    component: () => import('@/views/workbench_page/tool/others_tool/account_valuation/index'),
                    meta: { title: '账号估值'},
                },
                {
                    path: '/sensitivewords',
                    component: () => import('@/views/workbench_page/tool/others_tool/sensitive_words/index'),
                    meta: { title: '敏感词查询'},
                },
                // ------------------------小店------------------------
                {
                    path: '/tinyshopwarehouse',
                    component: () => import('@/views/workbench_page/tinyshop/tinyshopwarehouse/index'),
                    meta: { title: '小店库'},
                },
                {
                    path: '/tinyshopranking',
                    component: () => import('@/views/workbench_page/tinyshop/tinyshopranking/index'),
                    meta: { title: '小店排行榜'},
                },
                // ------------------------资源库------------------------
                {
                    path: '/businesscooperation',
                    component: () => import('@/views/workbench_page/resourcewarehouse/businesscooperation/index'),
                    meta: { title: '商务合作资源'},
                },
                {
                    path: '/premiumaccount',
                    component: () => import('@/views/workbench_page/resourcewarehouse/premiumaccount/index'),
                    meta: { title: '优质账号资源'},
                },
                // ------------------------其他功能------------------------
                {
                    path: '/pay',
                    component: () => import('@/views/workbench_page/other_functions/vip/index'),
                    meta: { title: 'vip中心'},
                },
                {
                    path: '/meattention',
                    component: () => import('@/views/workbench_page/other_functions/meattention/index'),
                    meta: { title: '我的关注'},
                },
                {
                    path: '/meorderform',
                    component: () => import('@/views/workbench_page/other_functions/meorderform/index'),
                    meta: { title: '我的订单'},
                },
                {
                    path: '/personalsetting',
                    component: () => import('@/views/workbench_page/other_functions/personalsetting/index'),
                    meta: { title: '个人设置'},
                },
                //------------------------详情------------------------
                {
                    path: '/detailedshop',
                    component: () => import('@/views/detailed_public/detailed_shop/index'),
                    meta: { title: '小店详情'}
                },
            ]

        },
        {
            path: '/workbench_tiktok',
            name: '抖音工作台',
            redirect : '/workbenchtiktokpagehome',
            // path: '/workbench_tiktok',
            component: () => import('@/views/workbench_tiktok/index.vue'),
            // component: resolve => require(['@/views/workbench_tiktok/index.vue'],resolve), 
            meta: { title: '抖音工作台'},
            children : [
                // ------------------------抖音工作台------------------------
                {
                    path: '/workbenchtiktokpagehome',
                    component: () => import('@/views/workbench_tiktok_page/home'),
                    meta: { title: '抖音工作台'},
                },
                // ------------------------直播------------------------
                {
                    path: '/real',
                    component: () => import('@/views/workbench_tiktok_page/live_treaming/real/index'),
                    meta: { title: '实时直播榜'},
                },

                {
                    path: '/fashion',
                    component: () => import('@/views/workbench_tiktok_page/live_treaming/fashion/index'),
                    meta: { title: '热门直播间'}
                },
                {
                    path: '/sellgoods',
                    component: () => import('@/views/workbench_tiktok_page/live_treaming/sellgoods/index'),
                    meta: { title: '直播带货榜'},
                },
                {
                    path: '/drainage',
                    component: () => import('@/views/workbench_tiktok_page/live_treaming/drainage/index'),
                    meta: { title: '直播引流榜'}
                },
                {
                    path: '/broadcastsearch',
                    component: () => import('@/views/workbench_tiktok_page/live_treaming/broadcastsearch/index'),
                    meta: { title: '直播搜索'}
                },
                // ------------------------达人------------------------
                {
                    path: '/talentlist',
                    component: () => import('@/views/workbench_tiktok_page/talent/talent_list/index'),
                    meta: { title: '达人榜'}
                },
                {
                    path: '/talentsearch',
                    component: () => import('@/views/workbench_tiktok_page/talent/talent_search/index'),
                    meta: { title: '达人搜索'}
                },
                // ------------------------电商------------------------
                {
                    path: '/ecommercemarket',
                    component: () => import('@/views/workbench_tiktok_page/ecommerce/ecommerce_market'),
                    meta: { title: '电商销售榜'}
                },
                {
                    path: '/ecommercegenius',
                    component: () => import('@/views/workbench_tiktok_page/ecommerce/ecommerce_genius'),
                    meta: { title: '电商牛人榜'}
                },
                {
                    path: '/ecommercesearch',
                    component: () => import('@/views/workbench_tiktok_page/ecommerce/ecommerce_search'),
                    meta: { title: '商品搜索'}
                },
                // ------------------------视频音乐------------------------
                {
                    path: '/hotvideos',
                    component: () => import('@/views/workbench_tiktok_page/popular_video_music/hot_videos/index'),
                    meta: { title: '热门视频榜'}
                },
                {
                    path: '/hotmusic',
                    component: () => import('@/views/workbench_tiktok_page/popular_video_music/hot_music/index'),
                    meta: { title: '热门音乐榜'}
                },
                {
                    path: '/hottopics',
                    component: () => import('@/views/workbench_tiktok_page/popular_video_music/hot_topics/index'),
                    meta: { title: '热门话题榜'}
                },
                // ------------------------数据监控------------------------
                {
                    path: '/livemonitoring',
                    component: () => import('@/views/workbench_tiktok_page/data_monitoring/live_monitoring/index'),
                    meta: { title: '直播监控'}
                },
                {
                    path: '/videosmonitoring',
                    component: () => import('@/views/workbench_tiktok_page/data_monitoring/videos_monitoring/index'),
                    meta: { title: '视频监控'}
                },
                {
                    path: '/commentmonitoring',
                    component: () => import('@/views/workbench_tiktok_page/data_monitoring/comment_monitoring/index'),
                    meta: { title: '评论监控'}
                },

                // ------------------------详情页------------------------
                {
                    path: '/livedetailed',
                    component: () => import('@/views/detailed_public/detailed_live/index'),
                    meta: { title: '直播详情'}
                },
                {
                    path: '/intelligentdetailed',
                    component: () => import('@/views/detailed_public/detailed_talent/index'),
                    meta: { title: '达人详情'}
                },
                {
                    path: '/commoditydetailed',
                    component: () => import('@/views/detailed_public/detailed_commodity/index'),
                    meta: { title: '商品详情'}
                },
                {
                    path: '/detailsscreen',
                    component: () => import('@/views/detailed_public/detailed_screen/index'),
                    meta: { title: '详情大屏'}
                },
                {
                    path: '/videosshow',
                    component: () => import('@/views/detailed_public/detailed_videos/index'),
                    meta: { title: '视频详情'},
                },
                {
                    path: '/musicshow',
                    component: () => import('@/views/detailed_public/detailed_music/index'),
                    meta: { title: '音乐详情'}
                },
                {
                    path: '/topicsshow',
                    component: () => import('@/views/detailed_public/detailed_topics/index'),
                    meta: { title: '话题详情'}
                },
                {
                    path: '/commentsshow',
                    component: () => import('@/views/detailed_public/detailed_comment/index'),
                    meta: { title: '评论详情'}
                },
            ],
        },
        {
            path: '/workbench_quick',
            name: '快手工作台',
            redirect : '/workbenchquickpagehome',
            component: () => import('@/views/workbench_quick/index.vue'),
            meta: { title: '快手工作台'},
            children : [
                // ------------------------快手工作台首页------------------------
                {
                    path: '/workbenchquickpagehome',
                    component: () => import('@/views/workbench_quick_page/home'),
                    meta: { title: '快手工作台'},
                },
            ]
        },
        {
            path: '/workbench_taobao',
            name: '淘宝工作台',
            redirect : '/workbenchtaobaopagehome',
            component: () => import('@/views/workbench_taobao/index.vue'),
            meta: { title: '淘宝工作台'},
            children : [
                // ------------------------快手工作台首页------------------------
                {
                    path: '/workbenchtaobaopagehome',
                    component: () => import('@/views/workbench_taobao_page/home'),
                    meta: { title: '淘宝工作台'},
                },
            ]
        },
        {
            path: '/403',
            component: () => import('@/components/page/403.vue'),
            meta: { title: '403' }
        },
        {
            path: '*',
            component: () => import('@/components/page/404.vue'),
            meta: { title: '404' }
        },
        // {
        //     path: '/login',
        //     component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
        //     meta: { title: '登录' }
        // },
        // {
        //     path: '/',
        //     component: () => import('@/views/home/index.vue'),
        //     meta: { title: '自述文件' },
        //     children: [
        //         // {
        //         //     path: '/dashboard',
        //         //     component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
        //         //     meta: { title: '系统首页' }
        //         // },
        //         // {
        //         //     // 权限页面
        //         //     path: '/permission',
        //         //     component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
        //         //     meta: { title: '权限测试', permission: true }
        //         // },
        //         {
        //             path: '/404',
        //             component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
        //             meta: { title: '404' }
        //         },
        //         {
        //             path: '/403',
        //             component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
        //             meta: { title: '403' }
        //         },
        //     ]
        // },
    ]
});

