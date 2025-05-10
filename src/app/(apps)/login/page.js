"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function LoginPage() {
  return (
    <div className="flex items-center min-h-screen bg-white place-content-center">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Sección Izquierda */}
        <div className="md:w-3/5 p-8 justify-items-center">
          <div className="text-left font-bold text-xl mb-6 flex justify-self-start">
            <img src="./ranita_verde.png" className="h-8"></img>
            <span className="text-teal-500 ml-2">Ranita</span>Sana
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-center text-teal-500 mb-2">
            Ingresa a tu cuenta
          </h2>
          <div className="border-2 w-10 border-teal-500 inline-block mb-4" />

          <div className="flex justify-center gap-3 mb-4">
            <a href="#" className="border-2 border-gray-200 rounded-full p-3">
              <FaFacebookF className="text-sm" />
            </a>
            <a href="#" className="border-2 border-gray-200 rounded-full p-3">
              <FaLinkedinIn className="text-sm" />
            </a>
            <a href="#" className="border-2 border-gray-200 rounded-full p-3">
              <FaGoogle className="text-sm" />
            </a>
          </div>

          <p className="text-gray-400 mb-3 text-sm text-center">o utiliza tu correo personal</p>

          <div className="flex flex-col items-center gap-3">
            <div className="bg-gray-100 w-full max-w-xs p-2 flex items-center">
              <FaRegEnvelope className="text-gray-400 m-2" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-gray-100 outline-none text-sm flex-1"
              />
            </div>
            <div className="bg-gray-100 w-full max-w-xs p-2 flex items-center">
              <MdLockOutline className="text-gray-400 m-2" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-gray-100 outline-none text-sm flex-1"
              />
            </div>

            <div className="flex justify-between w-full max-w-xs text-xs mb-3">
              <label className="flex items-center">
                <input type="checkbox" name="remember" className="mr-1" />
                Recordar cuenta
              </label>
              <a href="#" className="text-teal-500 hover:underline ml-4">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <a
              href="/Menu"
              className="font-bold border-2 border-teal-500 rounded-full px-10 py-2 hover:bg-teal-500 hover:text-white transition duration-200"
            >
              Ingresar
            </a>
          </div>
        </div>

        {/* Sección Derecha */}
        <div className="bg-teal-500 text-white p-8 flex flex-col justify-center items-center md:w-2/5">
          <h2 className="font-bold text-2xl mb-2">¡Bienvenido!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2" />
          <p className="mb-6 text-center px-2">
            Registra tus datos personales.
          </p>
          <a
            href="/Menu"
            className="font-bold border-2 border-white rounded-full px-10 py-2 hover:bg-white hover:text-teal-500 transition duration-200"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
