import{aB as lr,aC as or}from"./index-C9a7kOyS.js";import{o as V,p as ir}from"./MyApp-eLgOszab.js";import{e as nr,c as tr}from"./videos-Dm74OwMX.js";async function cr({id:I="",cursor:b=""}){var h,l,v;const i=await V({fb_api_req_friendly_name:"ProfileCometAppCollectionReelsRendererPaginationQuery",variables:{count:10,cursor:b,feedLocation:"COMET_MEDIA_VIEWER",feedbackSource:65,focusCommentID:null,renderLocation:null,scale:1,useDefaultActor:!0,id:btoa("app_collection:"+I+":168684841768375:260")},doc_id:"7821270511254925"}),s=ir(((h=i==null?void 0:i.split(`
`))==null?void 0:h[0])||"{}");console.log(s);const{edges:w=[],page_info:m={}}=((v=(l=s==null?void 0:s.data)==null?void 0:l.node)==null?void 0:v.aggregated_fb_shorts)||{};return w.map(a=>{var o,E,k,R,D,n,t,p,f,u,c,d;const r=((E=(o=a==null?void 0:a.profile_reel_node)==null?void 0:o.node)==null?void 0:E.short_form_video_context)||{};return{...nr(r==null?void 0:r.playback_video),id:((D=(R=(k=a==null?void 0:a.profile_reel_node)==null?void 0:k.node)==null?void 0:R.video)==null?void 0:D.id)||atob((n=a==null?void 0:a.profile_reel_node)==null?void 0:n.id).split(":").pop(),description:(f=(p=(t=a==null?void 0:a.profile_reel_node)==null?void 0:t.node)==null?void 0:p.message)==null?void 0:f.text,viewCount:r==null?void 0:r.play_count_reduced,created_time:(((c=(u=a==null?void 0:a.profile_reel_node)==null?void 0:u.node)==null?void 0:c.creation_time)||0)*1e3+"",url:r==null?void 0:r.shareable_url,cursor:(a==null?void 0:a.cursor)||m.end_cursor,music:r==null?void 0:r.track_title,length:(d=r==null?void 0:r.playback_video)==null?void 0:d.length_in_second}})}async function dr({page_id:I="",group_id_list:b=[],root_video_id:i="",cursor:s=""}){const w=s?await V({fb_api_req_friendly_name:"FBReelsContainerQuery",variables:{count:5,cursor:s,feedLocation:"COMET_MEDIA_VIEWER",feedbackSource:65,focusCommentID:null,group_id_list:b,recent_vpvs_v2:[],referral_source:"fb_shorts_bookmark",renderLocation:"fb_shorts_video_deep_dive",root_video_id:i||null,scale:2,surface_type:"FEED_VIDEO_DEEP_DIVE",useDefaultActor:!1,__relay_internal__pv__FBReelsMediaFooter_comet_enable_reels_ads_gkrelayprovider:!1,__relay_internal__pv__IsWorkUserrelayprovider:!1},doc_id:"9277146635647891"}):await V({fb_api_req_friendly_name:"FBReelsRootWithEntrypointQuery",variables:{count:1,defer_comments_loading:!1,feedbackSource:65,feedLocation:"COMET_MEDIA_VIEWER",focusCommentID:null,group_id_list:b,initial_node_id:"",isAggregationProfileViewerOrShouldShowReelsForPage:!1,page_id:I,recent_vpvs_v2:[],referral_source:"fb_shorts_bookmark",renderLocation:"fb_shorts_video_deep_dive",root_video_id:i||null,root_video_tracking_key:"",scale:2,shouldIncludeInitialNodeFetch:!1,shouldShowReelsForPage:!1,surface_type:"FEED_VIDEO_DEEP_DIVE",__relay_internal__pv__FBReelsMediaFooter_comet_enable_reels_ads_gkrelayprovider:!1,__relay_internal__pv__IsWorkUserrelayprovider:!1},doc_id:"27470664929247812"}),m=ir(w,[],!0),{edges:h=[],page_info:l}=lr(m[0]),v=or(m,"all_video_dash_prefetch_representations",!1)||[];return h.map(a=>{var n,t,p,f,u,c,d,A,S,C,B,M,O,q,L,P,U,Q,T,W,j,N,J,z,G,H,X,Y,K,Z,$,g,x,rr,ar;const r=(n=a==null?void 0:a.node)==null?void 0:n.short_form_video_context,o=(t=r==null?void 0:r.video)==null?void 0:t.id,E=["browser_native_hd_url","browser_native_sd_url"].map(e=>{var _,y;return(y=(_=r==null?void 0:r.playback_video)==null?void 0:_.videoDeliveryLegacyFields)==null?void 0:y[e]}).find(e=>!!e),k=(f=(p=["HD","SD"].map(e=>{var _,y,er,sr;return(sr=(er=(y=(_=r==null?void 0:r.playback_video)==null?void 0:_.videoDeliveryResponseFragment)==null?void 0:y.videoDeliveryResponseResult)==null?void 0:er.progressive_urls)==null?void 0:sr.find(F=>{var _r;return((_r=F==null?void 0:F.metadata)==null?void 0:_r.quality)===e})}))==null?void 0:p.find(e=>!!e.progressive_url))==null?void 0:f.progressive_url,D=(d=(c=(u=v.find(e=>e.video_id===o).representations)==null?void 0:u.sort((e,_)=>e.bandwidth-_.bandwidth))==null?void 0:c[0])==null?void 0:d.base_url;return{id:a==null?void 0:a.id,caption:(S=(A=a==null?void 0:a.node)==null?void 0:A.message)==null?void 0:S.text,translated_caption:(B=(C=a==null?void 0:a.node)==null?void 0:C.translated_message_for_viewer)==null?void 0:B.text,post_id:(M=a==null?void 0:a.node)==null?void 0:M.post_id,sound:{id:(O=r==null?void 0:r.soundtrack_info)==null?void 0:O.id,title:r==null?void 0:r.track_title},owner:{id:(q=r==null?void 0:r.video_owner)==null?void 0:q.id,avatar:(P=(L=r==null?void 0:r.video_owner)==null?void 0:L.displayPicture)==null?void 0:P.uri,name:(U=r==null?void 0:r.video_owner)==null?void 0:U.name,url:(Q=r==null?void 0:r.video_owner)==null?void 0:Q.url,ig_username:((T=r==null?void 0:r.video_owner)==null?void 0:T.__isActor)=="InstagramUserV2"?(W=r==null?void 0:r.video_owner)==null?void 0:W.username:""},video:{id:o,owner:(j=r==null?void 0:r.video_owner)==null?void 0:j.id,length:((N=r==null?void 0:r.video)==null?void 0:N.playable_duration_in_ms)||(((J=r==null?void 0:r.playback_video)==null?void 0:J.length_in_second)||0)*1e3,url:r==null?void 0:r.shareable_url,width:(z=r==null?void 0:r.playback_video)==null?void 0:z.width,height:(G=r==null?void 0:r.playback_video)==null?void 0:G.height,source:E||k||D,created_time:(((H=a==null?void 0:a.node)==null?void 0:H.creation_time)||0)*1e3+"",thumbnail:(X=r==null?void 0:r.video)==null?void 0:X.first_frame_thumbnail,variants:tr(((K=(Y=r==null?void 0:r.playback_video)==null?void 0:Y.videoDeliveryLegacyFields)==null?void 0:K.dash_manifest_xml_string)||((rr=(x=(g=($=(Z=r==null?void 0:r.playback_video)==null?void 0:Z.videoDeliveryResponseFragment)==null?void 0:$.videoDeliveryResponseResult)==null?void 0:g.dash_manifests)==null?void 0:x[0])==null?void 0:rr.manifest_xml)),quality:(ar=r==null?void 0:r.playback_video)==null?void 0:ar.min_quality_preference},cursor:(a==null?void 0:a.cursor)||(l==null?void 0:l.end_cursor)}})}JSON.stringify({qid:"-909642526462335516",mf_story_key:"1169687781834225",top_level_post_id:"1169687781834225",content_owner_id_new:"100063790413558",page_id:"105709027913953",story_location:153,story_attachment_style:"fb_shorts_creation",video_id:"1735896850598697",sty:128,mf_objid:"1169687781834225",ent_attachement_type:"FBShortsStoryAttachment",app_id:"2392950137",page_insights:{"100063790413558":{page_id:"100063790413558",page_id_type:"page",actor_id:"100063790413558",dm:{isShare:0,originalPostOwnerID:0,sharedMediaID:0,sharedMediaOwnerID:0},psn:"EntStatusCreationStory",post_context:{object_fbtype:266,publish_time:1731474065,story_name:"EntStatusCreationStory",story_fbid:["1169687781834225"]},role:1,sl:153,targets:[{actor_id:"100063790413558",page_id:"100063790413558",post_id:"1169687781834225",role:1,share_id:0}]}},actrs:"100063790413558",fb_shorts_tray_mf_story_key:"-2242439210195115141",fb_shorts_tray_query_id:"-909642526489079076",fb_shorts_ifu_tray_index:1,fb_shorts_ifu_tray_position:12,fb_shorts_ranking_request_id:"-909710971046028682",tds_flgs:3});export{dr as a,cr as g};