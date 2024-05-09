(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","minHeight":0,"class":"Player","backgroundColor":["#FFFFFF"],"start":"this.init()","scrollBarColor":"#000000","data":{"history":{},"defaultLocale":"pt","textToSpeechConfig":{"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"volume":1,"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false},"locales":{"pt":"locale/pt.txt"},"name":"Player760"},"backgroundColorRatios":[0],"hash": "aaf80ff89689a38153b25102fdc842ed5feea4787d6b35ba791f373e91a08aba", "definitions": [{"id":"mainPlayList","class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_56B93339_5AE2_2B09_41B5_1567FF6279D9_camera","media":"this.panorama_56B93339_5AE2_2B09_41B5_1567FF6279D9"}]},{"id":"panorama_56B93339_5AE2_2B09_41B5_1567FF6279D9","label":trans('panorama_56B93339_5AE2_2B09_41B5_1567FF6279D9.label'),"hfov":360,"hfovMin":"135%","class":"Panorama","data":{"label":"REV00_LAZERTOUR_06"},"thumbnailUrl":"media/panorama_56B93339_5AE2_2B09_41B5_1567FF6279D9_t.jpg","frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":2048,"rowCount":4,"colCount":24,"class":"TiledImageResourceLevel","url":"media/panorama_56B93339_5AE2_2B09_41B5_1567FF6279D9_0/{face}/0/{row}_{column}.jpg","width":12288,"tags":"ondemand"},{"height":1024,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_56B93339_5AE2_2B09_41B5_1567FF6279D9_0/{face}/1/{row}_{column}.jpg","width":6144,"tags":"ondemand"},{"height":512,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_56B93339_5AE2_2B09_41B5_1567FF6279D9_0/{face}/2/{row}_{column}.jpg","width":3072,"tags":["ondemand","preload"]}]},"thumbnailUrl":"media/panorama_56B93339_5AE2_2B09_41B5_1567FF6279D9_t.jpg"}],"hfovMax":130,"vfov":180},{"id":"MainViewer","toolTipFontColor":"#606060","playbackBarBottom":5,"playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderRadius":2,"data":{"name":"Main Viewer"},"progressBarBorderSize":0,"playbackBarHeight":10,"playbackBarHeadWidth":6,"progressOpacity":0.7,"subtitlesFontFamily":"Arial","playbackBarProgressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"surfaceReticleColor":"#FFFFFF","subtitlesTop":0,"progressBarBackgroundColorDirection":"horizontal","subtitlesBackgroundColor":"#000000","vrPointerColor":"#FFFFFF","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"firstTransitionDuration":0,"progressBarBorderColor":"#000000","playbackBarBackgroundOpacity":1,"toolTipPaddingBottom":4,"subtitlesTextShadowHorizontalLength":1,"subtitlesBackgroundOpacity":0.2,"height":"100%","progressBarBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"width":"100%","toolTipBorderColor":"#767676","playbackBarProgressBackgroundColorRatios":[0],"progressBorderColor":"#000000","playbackBarBorderColor":"#FFFFFF","minHeight":50,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarBorderRadius":0,"minWidth":100,"playbackBarProgressBorderColor":"#000000","toolTipTextShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionColor":"#FF6600","progressBackgroundColor":["#000000"],"progressBarBackgroundColor":["#3399FF"],"toolTipPaddingRight":6,"playbackBarHeadBorderRadius":0,"progressBottom":10,"toolTipShadowColor":"#333138","subtitlesTextShadowOpacity":1,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"playbackBarHeadHeight":15,"vrPointerSelectionTime":2000,"playbackBarLeft":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"progressHeight":2,"progressBorderSize":0,"playbackBarHeadShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","toolTipPaddingLeft":6,"playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"toolTipPaddingTop":4,"progressBackgroundColorRatios":[0],"subtitlesFontColor":"#FFFFFF","propagateClick":false,"progressLeft":"33%","class":"ViewerArea","progressBorderRadius":2,"subtitlesBottom":50,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressRight":"33%","toolTipFontSize":"1.11vmin","subtitlesFontSize":"3vmin","subtitlesGap":0},{"id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","arrowKeysAction":"translate","aaEnabled":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"gyroscopeEnabled":true},{"id":"panorama_56B93339_5AE2_2B09_41B5_1567FF6279D9_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_5016B50E_5AE2_2F0B_41D5_5FCC939F4304","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0}},{"id":"sequence_5016B50E_5AE2_2F0B_41D5_5FCC939F4304","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}]}],"scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"watermark":false,"height":"100%","width":"100%","propagateClick":false,"children":["this.MainViewer"],"gap":10,"layout":"absolute","scripts":{"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"isPanorama":TDV.Tour.Script.isPanorama,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"downloadFile":TDV.Tour.Script.downloadFile,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getComponentByName":TDV.Tour.Script.getComponentByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeJS":TDV.Tour.Script.executeJS,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"TOGGLE_VR":TDV.Tour.Script.TOGGLE_VR,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"shareSocial":TDV.Tour.Script.shareSocial,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getKey":TDV.Tour.Script.getKey,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"DISABLE_VR":TDV.Tour.Script.DISABLE_VR,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"init":TDV.Tour.Script.init,"showWindow":TDV.Tour.Script.showWindow,"getMediaByName":TDV.Tour.Script.getMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"translate":TDV.Tour.Script.translate,"createTween":TDV.Tour.Script.createTween,"startMeasurement":TDV.Tour.Script.startMeasurement,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setLocale":TDV.Tour.Script.setLocale,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"clone":TDV.Tour.Script.clone,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getOverlays":TDV.Tour.Script.getOverlays,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setValue":TDV.Tour.Script.setValue,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"mixObject":TDV.Tour.Script.mixObject,"textToSpeech":TDV.Tour.Script.textToSpeech,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"ENABLE_VR":TDV.Tour.Script.ENABLE_VR,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"registerKey":TDV.Tour.Script.registerKey,"quizFinish":TDV.Tour.Script.quizFinish,"existsKey":TDV.Tour.Script.existsKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"initAnalytics":TDV.Tour.Script.initAnalytics,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"openLink":TDV.Tour.Script.openLink,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"initQuiz":TDV.Tour.Script.initQuiz,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"quizStart":TDV.Tour.Script.quizStart,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"cloneBindings":TDV.Tour.Script.cloneBindings,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPixels":TDV.Tour.Script.getPixels,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility},"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.13.js.map
})();
//Generated with v2023.2.13, Wed May 8 2024