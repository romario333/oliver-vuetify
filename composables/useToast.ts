import { reactive, readonly, toRef } from "vue";

export interface ToastMessage {
  id: string;
  text: string;
  color?: string;
  timeout?: number;
  show?: boolean;
}

export interface ToastState {
  messages: ToastMessage[];
  currentMessage: ToastMessage | null;
}

const toastState = reactive<ToastState>({
  messages: [],
  currentMessage: null,
});

export function useToast() {
  const showToast = (
    text: string,
    options: {
      color?: string;
      timeout?: number;
    } = {}
  ) => {
    const id = Date.now().toString();
    const message: ToastMessage = {
      id,
      text,
      color: options.color || "primary",
      timeout: options.timeout || 4000,
      show: true,
    };

    toastState.messages.push(message);

    if (!toastState.currentMessage) {
      showNext();
    }
  };

  const showNext = () => {
    if (toastState.messages.length > 0) {
      toastState.currentMessage = toastState.messages.shift() || null;
    } else {
      toastState.currentMessage = null;
    }
  };

  const hideCurrentToast = () => {
    if (toastState.currentMessage) {
      toastState.currentMessage.show = false;
      setTimeout(() => {
        showNext();
      }, 100);
    }
  };

  const success = (text: string, timeout?: number) => {
    showToast(text, { color: "success", timeout });
  };

  const error = (text: string, timeout?: number) => {
    showToast(text, { color: "error", timeout });
  };

  const warning = (text: string, timeout?: number) => {
    showToast(text, { color: "warning", timeout });
  };

  const info = (text: string, timeout?: number) => {
    showToast(text, { color: "info", timeout });
  };

  return {
    // State
    currentMessage: readonly(toRef(toastState, "currentMessage")),

    // Methods
    showToast,
    hideCurrentToast,
    success,
    error,
    warning,
    info,
  };
}
