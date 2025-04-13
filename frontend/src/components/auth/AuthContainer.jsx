"use client";

import React, { useState, forwardRef, useImperativeHandle } from "react";
import { LoginFormPopup } from "./AuthLogin";
import { SignUpFormPopup } from "./AuthSignin";

export const AuthContainer = forwardRef((props, ref) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    openLogin: () => {
      setIsLoginOpen(true);
      setIsSignUpOpen(false);
    },
    openSignUp: () => {
      setIsSignUpOpen(true);
      setIsLoginOpen(false);
    },
    closeAll: () => {
      setIsLoginOpen(false);
      setIsSignUpOpen(false);
    }
  }));

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
  };

  const openSignUp = () => {
    setIsSignUpOpen(true);
    setIsLoginOpen(false);
  };

  const closeAll = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
  };

  return (
    <>
      <LoginFormPopup 
        isOpen={isLoginOpen} 
        onClose={closeAll} 
        onOpenSignUp={openSignUp} 
      />
      <SignUpFormPopup 
        isOpen={isSignUpOpen} 
        onClose={closeAll} 
        onOpenLogin={openLogin} 
      />
    </>
  );
});

// Add display name for better debugging
AuthContainer.displayName = "AuthContainer";