const startVideo = () =>  {
    var playlist = [{
        id: 0,
        sources: [{
            type: "video/mp4",
            src: "https://player.vimeo.com/external/122315924.hd.mp4?s=9a432e94b8f52179857b43017019ec59224596ca&profile_id=113"
        }, ],
        config: {
            poster: "images/SALMON_LOOPS.jpg",
            skipTo: true,
            autoplay: true,
            layout_position: 0,
            playlist_position: 0,
            played: false
        },
    }, {
        id: 1,
        sources: [{
            src: "https://player.vimeo.com/external/122286383.hd.mp4?s=7a353778450ff050a04ac7cac51001822b56e350&profile_id=113",
            type: 'video/mp4'
        }, ],
        config: {
            autoplay: true,
            poster: "images/SPELL.jpg",
            skipTo: true,
            layout_position: 2,
            playlist_position: 1,
            played: false
        }
    }, {
        id: 2,
        sources: [{
            src: "https://player.vimeo.com/external/122286379.hd.mp4?s=c33f35375b9f6ea3295396485598406514c71b85&profile_id=113",
            type: 'video/mp4'
        }, ],
        config: {
            autoplay: true,
            poster: "images/Fisher_King.jpg",
            skipTo: true,
            layout_position: 4,
            playlist_position: 2,
            played: false
        }
    }, {
        id: 3,
        sources: [{
            src: "https://player.vimeo.com/external/122286381.hd.mp4?s=3bbaf36f034b3ee7553999887eb3a8212bb1cedf&profile_id=113",
            type: 'video/mp4'
        }, ],
        config: {
            autoplay: true,
            poster: "images/LOOP_LOOP.jpg",
            skipTo: true,
            layout_position: 6,
            playlist_position: 4,
            played: false
        }
    }, {
        id: 4,
        sources: [{
						src: "https://player.vimeo.com/external/122340051.hd.mp4?s=9dc42e3f594f5cc185abd5081305f0ee9698fcfb&profile_id=119",
            type: 'video/mp4'
        }, ],
        config: {
            autoplay: true,
            poster: "images/BALLOONS.jpg",
            skipTo: true,
            layout_position: 5,
            playlist_position: 5,
            played: false
        }
    }, {
        id: 5,
        sources: [{
						src: "https://player.vimeo.com/external/122315927.hd.mp4?s=83ed5421a91a4bfe359646eb50768cbc667b86e6&profile_id=113",
            type: 'video/mp4'
        }, ],
        config: {
            autoplay: true,
            poster: "images/SALMON_SONG.jpg",
            layout_position: 3,
            skipTo: true,
            playlist_position: 6,
            played: false
        }
    }, {
        id: 6,
        sources: [{
						src: "https://player.vimeo.com/external/122286382.hd.mp4?s=0ad50b8be8b003167f205c8b38c3c8da02a72882&profile_id=113",
            type: 'video/mp4'
        }, ],
        config: {
            autoplay: true,
            poster: "images/YOUTHFUL_FOLLY.jpg",
            skipTo: true,
            layout_position: 1,
            playlist_position: 7,
            played: false
        }
    }, {
        id: 7,
        sources: [{
						src: "https://player.vimeo.com/external/122315925.hd.mp4?s=6da95fb16dc1930f065900cdbc0c366fc8f92ac8&profile_id=113",
            type: 'video/mp4'
        }, ],
        config: {
            autoplay: false,
            skipTo: false,
            poster: "images/DOG.jpg",
            layout_position: 7,
            playlist_position: 3,
            played: false
        }
    }, {
        id: 8,
        sources: [{
						src: "https://player.vimeo.com/external/122315929.hd.mp4?s=19e2ffbe7483d2c2b5e695066e51a23d15ebafb1&profile_id=113",
            type: 'video/mp4'
        }, ],
        config: {
            autoplay: true,
            skipTo: true,
            poster: "images/stairs.jpg",
            layout_position: 8,
            playlist_position: 8,
            played: false
        }
    }, {
        id: 9,
        sources: [{
						src: "https://player.vimeo.com/external/122286380.hd.mp4?s=191b2ca66c752160920babac9af331bf514d75b1&profile_id=113",
            type: 'video/mp4'
        }, ],
        config: {
            autoplay: true,
            poster: "images/WHALEWATCH.jpg",
            skipTo: true,
            layout_position: 9,
            playlist_position: 9,
            played: false
        }
    }, {
        id: 10,
        sources: [{
						src: "https://player.vimeo.com/external/122315928.hd.mp4?s=25ab3c5eed2cb3e7008302eb29a5e2ad06773254&profile_id=113",
            type: 'video/mp4'
        }, ],
        config: {
            poster: "images/swimming.jpg",
            skipTo: true,
            autoplay: true,
            layout_position: 10,
            playlist_position: 10,
            played: false
        }
    }];
    var controls = {
        setThumbs: function () {
            var playlistArray = playlist.slice();
            playlistArray.sort(function (a, b) {
                return a.config.layout_position - b.config.layout_position;
            });
            for (var i = 0; i < playlistArray.length; i++) {
                $('.site-container').append('<div class="video-container item-' + playlistArray[i].config.playlist_position + '" data-id="' + playlistArray[i].id + '" data-playlist-position="' + playlistArray[i].config.playlist_position + '" style="background-image: url(' + playlistArray[i].config.poster + ');"></div>')
            };
        },
        playTrack: function (ele) {
            $('.video-container').off();
            var _this = this;
            if (_this.bigVideo) {
                _this.bigVideo.getPlayer().off();
                _this.bigVideo.remove();
                _this.bigVideo = false;
            }
            if (_this.currentPlayer) {
                _this.currentPlayer = false;
            }
            $('.active').removeClass('active');
            $(ele).addClass('active');
            var current = $(ele).attr('data-id');
            var cp = playlist[current];
            _this.currentPlayer = cp;
            $(function () {
                _this.bigVideo = new $.BigVideo({
                    useFlashForFirefox: false,
                    container: $('.active')
                });
                _this.bigVideo.init();
                _this.bigVideo.show(cp.sources);
                _this.bigVideo.getPlayer().on('ended', function (e) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    _this.donePlaying(e);
                    return;
                });
            });
            _this.listen();
        },
        start: function () {
            var _this = this;
            _this.setThumbs();
            _this.playTrack('.item-0');
            return;
        },
        listen: function () {
            var _this = this;
            $('.video-container').on('click', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                if ($(this).hasClass('active')) {
                    return;
                }
                if ((typeof (playlist[($(e.currentTarget).attr('data-playlist-position') - 1)]) != 'undefined' && playlist[($(this).attr('data-playlist-position') - 1)].config.played) || playlist[$(this).attr('data-id')].config.skipTo) {
                    _this.playTrack(e.currentTarget);
                }
                return;
            });
        },
        checkNextPlay: function (advance) {
            var _this = this;
            var currentVideo = _this.currentPlayer.config.playlist_position;
            var nextTrack = _this.getNextTrack(advance);
            if (nextTrack) {
                if (nextTrack.config.autoplay) {
                    _this.playTrack('.item-' + nextTrack.config.playlist_position);
                } else {
                    _this.checkNextPlay(advance + 1);
                }
            } else {
                _this.playTrack('.item-0');
            }
            return;
        },
        currentPlayer: false,
        bigVideo: false,
        animating: false,
        getNextTrack: function (advance) {
            var _this = this;
            if (_this.currentPlayer == false) {
                return false;
            }
            var playlistArray = _this.getOrderedPlaylist();
            return playlistArray[(_this.currentPlayer.config.playlist_position + 1 + (advance || 0))] || false;
        },
        donePlaying: function () {
            var _this = this;
            _this.currentPlayer.config.played = true;
            _this.checkNextPlay(0);
            return;
        },
        getOrderedPlaylist: function () {
            var playlistArray = playlist.slice();
            playlistArray.sort(function (a, b) {
                return a.config.playlist_position - b.config.playlist_position;
            });
            return playlistArray;
        }
    };
    controls.start();
    $('#start-button-wrapper').remove();
    $('#wrap').show();
};
