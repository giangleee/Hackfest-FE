<template>

      <div class="home">
        <div id="nav">
          <button class="btn btn-success" @click="logoutUser">Logout</button>
        </div>
        <div class="form-group">
          <div v-if="incomingCall">
            <button class="btn btn-success" @click="acceptCall">Accept Call</button>
            <button class="btn btn-success" @click="rejectCall">Reject Call</button>
          </div>
          <div v-else-if="ongoingCall">
            <button class="btn btn-secondary"> Ongoing Call ... </button>
          </div>
          <div v-else>
            <button  @click="startVideoChat" class="btn btn-secondary"> Start Call <span v-if="showSpinner" class="fa fa-spin fa-spinner"></span> </button>
          </div>
        </div>
        <div id="callScreen"></div>
      </div>

</template>

<script>
import { CometChat } from "@cometchat-pro/chat";
export default {
  name: "home",
  data() {
    return {
      username: "",
      uid: "",
      session_id: "",
      receiver_id: null,
      error: false,
      showSpinner: false,
      incomingCall: false,
      ongoingCall: false
    };
  },
  created() {
    this.authLoginUser();
    this.getLoggedInUser();
    let globalContext = this;
    var listnerID = "123";
    CometChat.addCallListener(
        listnerID,
        new CometChat.CallListener({
          onIncomingCallReceived(call) {
            console.log("Incoming call:", call);
            globalContext.incomingCall = true;
            globalContext.session_id = call.sessionId;
          },
          onOutgoingCallAccepted(call) {
            console.log("Outgoing call accepted:", call);
            globalContext.ongoingCall = true;
            CometChat.startCall(
                call.sessionId,
                document.getElementById("callScreen"),
                new CometChat.OngoingCallListener({
                  onUserJoined: user => {
                    /* Notification received here if another user joins the call. */
                    console.log("User joined call:", user);
                    /* this method can be use to display message or perform any actions if someone joining the call */
                  },
                  onUserLeft: user => {
                    /* Notification received here if another user left the call. */
                    console.log("User left call:", user);
                    /* this method can be use to display message or perform any actions if someone leaving the call */
                  },
                  onCallEnded: call => {
                    globalContext.ongoingCall = false;
                    globalContext.incomingCall = false;
                    /* Notification received here if current ongoing call is ended. */
                    console.log("Call ended:", call);
                    /* hiding/closing the call screen can be done here. */
                  }
                })
            );
            // Outgoing Call Accepted
          },
          onOutgoingCallRejected(call) {
            console.log("Outgoing call rejected:", call);
            this.incomingCall = false;
            this.ongoingCall = false;
            this.receiver_id = "";
            // Outgoing Call Rejected
          },
          onIncomingCallCancelled(call) {
            console.log("Incoming call calcelled:", call);
          }
        })
    );
  },
  methods: {
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
            console.log("Initialization completed successfully");
            // You can now call login function.
          },
          error => {
            console.log("Initialization failed with error:", error);
            // Check the reason for error and take appropriate action.
          }
      );
      CometChat.login(uid, authKey).then(
          user => {
            console.log("Login Successful:", { user });
          },
          error => {
            console.log("Login failed with exception:", { error });
          }
      );

    },
    getLoggedInUser() {
      var user = CometChat.getLoggedinUser().then(
          user => {
            this.username = user.name;
            this.uid = user.uid;
          },
      );
    },
    startVideoChat() {
      if (!this.receiver_id) this.error = true;
      this.showSpinner = true;
      var receiverID = "user2";
      var callType = CometChat.CALL_TYPE.VIDEO;
      var receiverType = CometChat.RECEIVER_TYPE.USER;
      var call = new CometChat.Call(receiverID, callType, receiverType);
      CometChat.initiateCall(call).then(
          outGoingCall => {
            this.showSpinner = false;
            console.log("Call initiated successfully:", outGoingCall);
            // perform action on success. Like show your calling screen.
          },
          error => {
            console.log("Call initialization failed with exception:", error);
          }
      );
    },
    acceptCall() {
      let globalContext = this;
      this.ongoingCall = true;
      this.incomingCall = false;
      var sessionID = this.session_id;
      CometChat.acceptCall(sessionID).then(
          call => {
            console.log("Call accepted successfully:", call);
            console.log("call accepted now....");
            // start the call using the startCall() method
            console.log(globalContext.ongoingCall);
            CometChat.startCall(
                call.sessionId,
                document.getElementById("callScreen"),
                new CometChat.OngoingCallListener({
                  onUserJoined: user => {
                    /* Notification received here if another user joins the call. */
                    console.log("User joined call:", user);
                    /* this method can be use to display message or perform any actions if someone joining the call */
                  },
                  onUserLeft: user => {
                    /* Notification received here if another user left the call. */
                    console.log("User left call:", user);
                    /* this method can be use to display message or perform any actions if someone leaving the call */
                  },
                  onCallEnded: call => {
                    /* Notification received here if current ongoing call is ended. */
                    console.log("Call ended:", call);
                    globalContext.ongoingCall = false;
                    globalContext.incomingCall = false;
                    /* hiding/closing the call screen can be done here. */
                  }
                })
            );
          },
          error => {
            console.log("Call acceptance failed with error", error);
            // handle exception
          }
      );
    },
    rejectCall() {
      var sessionID = this.session_id;
      var globalContext = this;
      var status = CometChat.CALL_STATUS.REJECTED;
      CometChat.rejectCall(sessionID, status).then(
          call => {
            console.log("Call rejected successfully", call);
            globalContext.incomingCall = false;
            globalContext.ongoingCall = false;
            globalContext.receiver_id = "";
          },
          error => {
            console.log("Call rejection failed with error:", error);
          }
      );
    },
    logoutUser() {
      CometChat.logout().then(
          success => {
            console.log("Logout completed successfully");
            console.log(success);
          },
          error => {
            //Logout failed with exception
            console.log("Logout failed with exception:", { error });
          }
      );
    },

  }
};
</script>