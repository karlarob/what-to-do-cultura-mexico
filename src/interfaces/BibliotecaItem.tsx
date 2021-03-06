// Generated by https://quicktype.io

export interface BibliotecaItem {
  help: string;
  success: boolean;
  result: Result;
}

export interface Result {
  include_total: boolean;
  resource_id: string;
  fields: Field[];
  records_format: string;
  records: Record[];
  _links: Links;
  total: number;
}

export interface Links {
  start: string;
  next: string;
}

export interface Field {
  type: Type;
  id: string;
}

export enum Type {
  Int = "int",
  Numeric = "numeric",
  Text = "text",
  Timestamp = "timestamp",
}

export interface Record {
  _id: number;
  biblioteca_id: number;
  biblioteca_numero_coleccion: number;
  biblioteca_nombre: string;
  biblioteca_fecha_fundacion: string;
  biblioteca_adscripcion: BibliotecaAdscripcion;
  estado_id: number;
  nom_ent: NomEnt;
  municipio_id: number;
  nom_mun: string;
  localidad_id: number;
  nom_loc: string;
  biblioteca_calle_numero: string;
  biblioteca_colonia: string;
  biblioteca_cp: number;
  biblioteca_telfono1: string;
  biblioteca_pagina_web: string;
  gmaps_longitud: number;
  gmaps_latitud: number;
  link_sic: string;
  fecha_mod: string;
}

export enum BibliotecaAdscripcion {
  CeReSo = "CE.RE.SO.",
  Cereso = "CERESO",
  GobienoMunicipal = "Gobieno Municipal",
  GobiernoMunicipal = "Gobierno Municipal",
  Imae = "IMAE",
  InsitutoDeCulturaDeBajaCaliforniaGobiernoEstatal = "Insituto de Cultura de Baja California, Gobierno Estatal",
  InstitutoCulturalDeAguascalientes = "Instituto Cultural de Aguascalientes",
  Sedena = "SEDENA",
}

export enum NomEnt {
  Aguascalientes = "Aguascalientes",
  BajaCalifornia = "Baja California",
  CoahuilaDeZaragoza = "Coahuila de Zaragoza",
}
