import type { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import type { LoginScreenState } from "~/components/LoginScreen";
import { LoginScreen } from "~/components/LoginScreen";

const ForgotPassword: NextPage = () => {
  const [loginScreenState, setLoginScreenState] =
    useState<LoginScreenState>("HIDDEN");

  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="flex h-[70px] w-full justify-center bg-blue-400 font-bold text-white">
        <div className="flex max-w-5xl grow items-center justify-center px-5">
          <Link
            className="text-3xl"
            href="/"
            style={{ fontFamily: "Aharoni Bold" }}
          >
            alfabeta
          </Link>
        </div>
      </header>
      <div className="flex w-full grow flex-col items-center gap-5 px-5 pt-5 sm:w-96 sm:pt-52">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          Esqueci minha senha
        </h1>
        <p className="text-center text-gray-800">
          Nós enviaremos instruções de como recuperar sua senha por email.
        </p>
        <div className="flex w-full flex-col gap-2">
          <input
            className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
            placeholder="Email"
          />
          <button className="w-full rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 font-bold uppercase text-white transition hover:brightness-110">
            Enviar
          </button>
        </div>
      </div>
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </div>
  );
};

export default ForgotPassword;
