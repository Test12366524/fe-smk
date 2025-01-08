<template>
  <div class="chat">
    <div class="chat-button" @click="openWhatsapp">
      <img src="../../assets/images/cta-wa.png" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-button {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 50;
  text-align: right;
  font-size: 32px;
  cursor: pointer;
  img {
    position: relative;
    width: 140px;
  }
}

@media (max-width: 768px) {
  .chat-button {
    bottom: 20px; /* Adjust bottom position for mobile */
    right: 20px; /* Adjust right position for mobile */
    font-size: 24px; /* Smaller font size for mobile */

    img {
      width: 100px; /* Smaller image size for mobile */
    }
  }
}

.panel {
  position: fixed;
  bottom: 120px;
  right: 40px;
  text-align: right;
  visibility: hidden;
  z-index: -1;
  opacity: 0;
  text-align: left;
  transform: scale(0.9);
  transition: all 0.2s cubic-bezier(0.01, 0.65, 0.3, 0.9);
  @include palette-background-paper;
  @include shade;
  border-radius: $rounded-medium;
  overflow: hidden;
  header {
    display: flex;
    align-items: center;
    padding: spacing(2, 0, 0.5, 2);
    @include use-theme(
      background-color,
      $palette-primary-light,
      $palette-primary-dark
    );
    h3 {
      flex: 1;
    }
  }
  &.show {
    transform: scale(1);
    visibility: visible;
    z-index: 201;
    opacity: 1;
  }
}

.close {
  font-size: 24px;
  position: relative;
  top: -4px;
  margin: spacing(0, 1);
  i {
    position: relative;
    left: -2px;
    @include left(-2px);
    top: 0;
  }
}

.indicator {
  @include margin-right(4px);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  display: inline-block;
}

.online {
  background: #07d517;
}

.offline {
  background: #b7b7b7;
}

.chat-room {
  padding: $spacing2;
  position: relative;
  height: 300px;
  width: 300px;
  overflow: auto;
  ul {
    padding: 0;
    li {
      display: flex;
      position: relative;
      margin-bottom: $spacing4;
    }
  }
}

.avatar {
  width: 38px;
  height: 38px;
  margin-right: $spacing1;
}

.talk {
  position: relative;
  border-radius: $rounded-small;
  border: 2px solid $palette-primary-main;
  padding: spacing(1, 1.5);
}

.from {
  border: none;
  @include use-theme(
    background-color,
    $palette-primary-light,
    $palette-primary-dark
  );
  &:before {
    position: absolute;
    top: 5px;
    content: '';
    left: -5px;
    border-top: 5px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 5px solid;
    @include use-theme(
      border-right-color,
      $palette-primary-light,
      $palette-primary-dark
    );
  }
}

.form {
  display: flex;
  align-items: center;
  margin: spacing(0, 2);
}

.input {
  flex: 1;
}

.send {
  @include margin-left($spacing2);
  font-size: 22px;
  span {
    @include margin-left(4px);
    @include rtl-flip;
  }
}
</style>

<script>
import avatar from '@/assets/images/avatars/pp_boy4.svg';
import link from '@/assets/text/link';

export default {
  data() {
    return {
      showChat: false,
      message: '',
      visitorAvatar: avatar,
      conversation: [
        {
          text: 'Hola!, Maecenas',
          visitor: false,
        },
        {
          text: 'Hola!, Maecenas nisl ',
          visitor: true,
        },
        {
          text: 'Hola!, Maecenas',
          visitor: false,
        },
      ],
    };
  },
  methods: {
    send() {
      if (this.message !== '') {
        this.conversation.push({ text: this.message, visitor: true });
        this.message = '';
        // scroll to bottom
        const ctn = document.getElementById('chat-container');
        setTimeout(() => {
          ctn.scrollTo(0, ctn.scrollHeight);
        }, 300);
      }
    },
    toggleChat() {
      this.showChat = !this.showChat;
    },
    closeChat() {
      this.showChat = false;
    },
    openWhatsapp() {
      window.open(link.education.whatsapp, '_blank');
    },
  },
};
</script>
