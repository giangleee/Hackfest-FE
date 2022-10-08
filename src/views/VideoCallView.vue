<template>
  <div class="home">
    <div class="button2" @click="startVideoChat">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Tìm Kiếm Ngẫu Nhiên
    </div>
    <div id="callScreen"></div>
    <RatingFormComponent 
    ref="ratingForm"/>
  </div>
</template>
<style lang="scss">
@import "@/assets/styles/videoCallForm.scss";
</style>
<script>
import { CometChat } from "@cometchat-pro/chat";
import RatingFormComponent from '@/components/RatingFormComponent.vue'

export default {
  name: "home",
  components: {
    RatingFormComponent
  },
  data() {
    return {
      username: "",
      uid: "",
      session_id: "",
      receiver_id: null,
      error: false,
      incomingCall: false,
      ongoingCall: false,
    };
  },
  mounted() {
    this.authLoginUser();
    this.getLoggedInUser();
    let globalContext = this;
    var listnerID = "123";
    CometChat.addCallListener(
      listnerID,
      new CometChat.CallListener({
        onIncomingCallReceived(call) {
          console.log("Incoming call:", call);
          globalContext.session_id = call.sessionId;

          this.ongoingCall = true;
          this.incomingCall = false;
          CometChat.acceptCall(call.sessionId).then(
            (call) => {
              console.log("Call accepted successfully:", call);
              globalContext.showView();
              CometChat.startCall(
                call.sessionId,
                document.getElementById("callScreen"),
                new CometChat.OngoingCallListener({
                  onUserJoined: (user) => {
                    console.log("User joined call:", user);
                  },
                  onUserLeft: (user) => {
                    console.log("User left call:", user);
                    globalContext.hideView();
                  },
                  onCallEnded: (call) => {
                    console.log("Call ended:", call);
                    globalContext.hideView();
                    globalContext.testOpenFunction()
                  },
                })
              );
            },
            (error) => {
              console.log("Call acceptance failed with error", error);
            }
          );
        },
        onOutgoingCallAccepted(call) {
          console.log("Outgoing call accepted:", call);
          globalContext.ongoingCall = true;
          globalContext.showView();
          CometChat.startCall(
            call.sessionId,
            document.getElementById("callScreen"),
            new CometChat.OngoingCallListener({
              onUserJoined: (user) => {
                console.log("User joined call:", user);
              },
              onUserLeft: (user) => {
                console.log("User left call:", user);
                globalContext.hideView();
              },
              onCallEnded: (call) => {
                console.log("Call ended:", call);
                var modal = document.getElementById("myModal");

                var btn = document.getElementById("myBtn");
                var span = document.getElementsByClassName("close")[0];
                globalContext.testOpenFunction()

                btn.onclick = function () {
                  modal.style.display = "block";
                };

                span.onclick = function () {
                  modal.style.display = "none";
                };
                window.onclick = function (event) {
                  if (event.target == modal) {
                    modal.style.display = "none";
                  }
                };
                globalContext.hideView();
                
              },
            })
          );
          // Outgoing Call Accepted
        },
        onIncomingCallCancelled(call) {
          console.log("Incoming call calcelled:", call);
        },
      })
    );
  },
  methods: {
    showView() {
      let callScreen = document.getElementById("callScreen");
      let button = document.getElementsByClassName("button2")[0];
      callScreen.style.display = "flex";
      callScreen.style.width = "1000px";
      callScreen.style.height = "500px";
      button.style.visibility = "hidden";
    },
    hideView() {
      let callScreen = document.getElementById("callScreen");
      let button = document.getElementsByClassName("button2")[0];
      callScreen.style.display = "none";
      button.style.visibility = "visible";
    },
    authLoginUser() {
      let authKey = process.env.VUE_APP_COMMETCHAT_API_KEY;
      let uid = "user1";
      const region = "US";
      const appSetting = new CometChat.AppSettingsBuilder()
        .subscribePresenceForAllUsers()
        .setRegion(region)
        .build();
      CometChat.init(process.env.VUE_APP_COMMETCHAT_APP_ID, appSetting).then(
        () => {
          console.log("Khoi tao thanh cong");
          CometChat.login(uid, authKey).then(
            (user) => {
              console.log("Login thanh cong:", { user });
            },
            (error) => {
              console.log("Login loi:", { error });
            }
          );
        },
        (error) => {
          console.log("Khoi tao loi:", error);
        }
      );
    },
    getLoggedInUser() {
      var user = CometChat.getLoggedinUser().then((user) => {
        this.username = user.name;
        this.uid = user.uid;
      });
    },
    joinQueue() {},
    startVideoChat() {
      if (!this.receiver_id) this.error = true;
      var receiverID = "user2";
      var callType = CometChat.CALL_TYPE.VIDEO;
      var receiverType = CometChat.RECEIVER_TYPE.USER;
      var call = new CometChat.Call(receiverID, callType, receiverType);
      CometChat.initiateCall(call).then(
        (outGoingCall) => {
          console.log("Call initiated successfully:", outGoingCall);
        },
        (error) => {
          console.log("Call initialization failed with exception:", error);
        }
      );
    },
      testOpenFunction() {
        this.$refs.ratingForm.testFunction()
        // this.$alert('This is a message', 'Title', {
        //   confirmButtonText: 'OK',
        //   callback: action => {
        //     this.$message({
        //       type: 'info',
        //       message: `action: ${ action }`
        //     });
        //   }
        // });
      }

  },
};
</script>
