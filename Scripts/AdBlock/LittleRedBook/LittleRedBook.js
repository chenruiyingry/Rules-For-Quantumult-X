const version = 'V1.0.13';

let body = $response.body;
if (body) {
    switch (!0) {
        case/api\/sns\/v\d\/note\/widgets/.test($request.url):
            try {
                let e = JSON.parse(body), t = ["1goods_card_v2", "note_next_step"];
                for (let a of t) e.data?.[a] && delete e.data[a];
                body = JSON.stringify(e)
            } catch (s) {
                console.log("widgets: " + s)
            }
            break;
        case/api\/sns\/v\d\/note\/redtube/.test($request.url):
            try {
                let o = JSON.parse(body);
                for (let d of o.data.items) d.related_goods_num && (d.related_goods_num = 0), d.has_related_goods && (d.has_related_goods = !1), d.media_save_config && (d.media_save_config = {
                    disable_save: !1,
                    disable_watermark: !0,
                    disable_weibo_cover: !0
                }), d.share_info && (d.share_info.function_entries = [{type: "video_download"}, {type: "generate_image"}, {type: "copy_link"}, {type: "native_voice"}, {type: "video_speed"}, {type: "dislike"}, {type: "report"}, {type: "video_feedback"}]);
                body = JSON.stringify(o)
            } catch (r) {
                console.log("redtube: " + r)
            }
            break;
        case/api\/sns\/v\d\/note\/videofeed/.test($request.url):
            try {
                let i = JSON.parse(body);
                for (let l of i.data) l.related_goods_num && (l.related_goods_num = 0), l.has_related_goods && (l.has_related_goods = !1), l.media_save_config && (l.media_save_config = {
                    disable_save: !1,
                    disable_watermark: !0,
                    disable_weibo_cover: !0
                }), l.share_info && (l.share_info.function_entries = [{type: "video_download"}, {type: "generate_image"}, {type: "copy_link"}, {type: "native_voice"}, {type: "video_speed"}, {type: "dislike"}, {type: "report"}, {type: "video_feedback"}]);
                body = JSON.stringify(i)
            } catch (n) {
                console.log("videofeed: " + n)
            }
            break;
        case/api\/sns\/v\d\/note\/feed/.test($request.url):
            try {
                let c = JSON.parse(body);
                for (let y of c.data) if (y.related_goods_num && (y.related_goods_num = 0), y.has_related_goods && (y.has_related_goods = !1), y.note_list) for (let g of y.note_list) g.media_save_config = {
                    disable_save: !1,
                    disable_watermark: !0,
                    disable_weibo_cover: !0
                };
                body = JSON.stringify(c)
            } catch (f) {
                console.log("feed: " + f)
            }
            break;
        case/api\/sns\/v\d\/note\/imagefeed/.test($request.url):
            try {
                let b = JSON.parse(body);
                for (let p of b.data) if (p.related_goods_num && (p.related_goods_num = 0), p.has_related_goods && (p.has_related_goods = !1), p.note_list) for (let h of p.note_list) h.media_save_config = {
                    disable_save: !1,
                    disable_watermark: !0,
                    disable_weibo_cover: !0
                };
                body = JSON.stringify(b)
            } catch (v) {
                console.log("imagefeed: " + v)
            }
            break;
        case/api\/sns\/v\d\/homefeed\/categories\?/.test($request.url):
            try {
                let m = JSON.parse(body);
                m.data.categories = m.data.categories.filter(e => !("homefeed.shop" == e.oid || "homefeed.live" == e.oid)), body = JSON.stringify(m)
            } catch (u) {
                console.log("categories: " + u)
            }
            break;
        case/api\/sns\/v\d\/search\/hint/.test($request.url):
            try {
                let k = JSON.parse(body);
                k.data?.hint_words && (k.data.hint_words = [{
                    title: "搜索笔记",
                    type: "firstEnterOther#itemCfRecWord#搜索笔记#1",
                    search_word: "搜索笔记"
                }]), body = JSON.stringify(k)
            } catch ($) {
                console.log("hint: " + $)
            }
            break;
        case/api\/sns\/v\d\/search\/hot_list/.test($request.url):
            try {
                let w = JSON.parse(body);
                w.data = {
                    scene: "",
                    title: "",
                    items: [],
                    host: "",
                    background_color: {},
                    word_request_id: ""
                }, body = JSON.stringify(w)
            } catch (_) {
                console.log("hot_list: " + _)
            }
            break;
        case/api\/sns\/v\d\/search\/trending/.test($request.url):
            try {
                let q = JSON.parse(body);
                q.data = {title: "", queries: [], type: "", word_request_id: ""}, body = JSON.stringify(q)
            } catch (E) {
                console.log("trending: " + E)
            }
            break;
        case/api\/sns\/v\d\/system_service\/splash_config/.test($request.url):
            try {
                let x = JSON.parse(body);
                x.data.ads_groups.forEach(e => {
                    e.start_time = "2208963661", e.end_time = "2209050061", e.ads && e.ads.forEach(e => {
                        e.start_time = "2208963661", e.end_time = "2209050061"
                    })
                }), body = JSON.stringify(x)
            } catch (C) {
                console.log("splash_config: " + C)
            }
            break;
        case/api\/sns\/v\d\/homefeed\?/.test($request.url):
            try {
                let O = JSON.parse(body);
                O.data = O.data.filter(e => !e.is_ads), body = JSON.stringify(O)
            } catch (R) {
                console.log("homefeed: " + R)
            }
            break;
        case/api\/sns\/v\d+\/search\/notes\?/.test($request.url):
            try {
                let W = JSON.parse(body);
                W.data.items = W.data.items.filter(e => !e.ads), body = JSON.stringify(W)
            } catch (j) {
                console.log("search/notes: " + j)
            }
            break;
        case/api\/sns\/v\d\/system_service\/config\?/.test($request.url):
            try {
                let z = JSON.parse(body),
                    A = ["store", "splash", "loading_img", "app_theme", "cmt_words", "highlight_tab"];
                for (let B of A) z.data?.[B] && delete z.data[B];
                body = JSON.stringify(z)
            } catch (D) {
                console.log("system_service: " + D)
            }
            break;
        default:
            $done({})
    }
    $done({body})
} else $done({});