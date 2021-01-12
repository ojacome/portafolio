import { Injectable } from '@angular/core';
import { Proyect } from '../models/proyect.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  public proyects: Proyect[] = [];

  constructor() { 

    this.proyects = [
      {
        id: 1,
        title: "Sistema de Incidencias",
        description: "Posee varios módulos como Roles, Reportes, Dashboard y Chat en tiempo real.",
        type: "Frontend y Backend",
        technologies: ["Angular 9", "Node js", "Express", "SqlServer"],
        images: [
          {
            id: 1,
            name: "crm_ukzj8k",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208763/portfolio/crm_ukzj8k.png",
            important: true
          },
          {
            id: 2,
            name: "crm2_jvspna",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208764/portfolio/crm2_jvspna.png",
            important: false
          },
          {
            id: 3,
            name: "crm3_akelrd",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208764/portfolio/crm3_akelrd.png",
            important: false
          },
          {
            id: 4,
            name: "crm4_xbzjc4",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/crm4_xbzjc4.png",
            important: false
          }
        ],
        album: [ 
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208763/portfolio/crm_ukzj8k.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208763/portfolio/crm_ukzj8k.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208763/portfolio/crm_ukzj8k.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208764/portfolio/crm2_jvspna.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208764/portfolio/crm2_jvspna.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208764/portfolio/crm2_jvspna.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208764/portfolio/crm3_akelrd.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208764/portfolio/crm3_akelrd.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208764/portfolio/crm3_akelrd.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/crm4_xbzjc4.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/crm4_xbzjc4.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/crm4_xbzjc4.png",
          },
        ]
      },
      {
        id: 2,
        title: "Sistema de Subastas",
        description: "Cliente: Fundación Fé y Acción. El Sistema permite el registro de artículo para la subasta de los mismos. El pago se lo reliza por medio de PayPal. Sistema de comunicación del proceso por medio del correo electrónico.",
        type: "Frontend y Backend",
        technologies: ["Angular 9", "Node js", "Express", "MySql"],
        images: [
          {
            id: 1,
            name: "fun_s7sipq",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208771/portfolio/fun_s7sipq.png",
            important: true
          },
          {
            id: 2,
            name: "fun2_w2zywx",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208772/portfolio/fun2_w2zywx.png",
            important: false
          },
          {
            id: 3,
            name: "fun3_bvq7is",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208776/portfolio/fun3_bvq7is.png",
            important: false
          },
          {
            id: 4,
            name: "fun4_kfptfu",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208772/portfolio/fun4_kfptfu.png",
            important: false
          },
          {
            id: 5,
            name: "fun5_fckvg2",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208770/portfolio/fun5_fckvg2.png",
            important: false
          },
          {
            id: 6,
            name: "fun6_gutxus",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208773/portfolio/fun6_gutxus.png",
            important: false
          },
          {
            id: 7,
            name: "fun7_mip072",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208772/portfolio/fun7_mip072.png",
            important: false
          },
        ],
        album: [ 
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208771/portfolio/fun_s7sipq.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208771/portfolio/fun_s7sipq.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208771/portfolio/fun_s7sipq.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208772/portfolio/fun2_w2zywx.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208772/portfolio/fun2_w2zywx.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208772/portfolio/fun2_w2zywx.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208776/portfolio/fun3_bvq7is.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208776/portfolio/fun3_bvq7is.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208776/portfolio/fun3_bvq7is.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208772/portfolio/fun4_kfptfu.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208772/portfolio/fun4_kfptfu.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208772/portfolio/fun4_kfptfu.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208770/portfolio/fun5_fckvg2.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208770/portfolio/fun5_fckvg2.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208770/portfolio/fun5_fckvg2.png",
          },
        ]
      },
      {
        id: 3,
        title: "Sistema de Hospitales",
        description: "Tiene como objetivo registrar hospitales con los médicos que trabajan en ellos, mantenimientos de los módulos de hospitales, médicos y usuarios.",
        type: "Frontend y Backend",
        technologies: ["Angular 9", "Node js", "Express", "MongoDB"],
        images: [
          {
            id: 1,
            name: "adm4_zcm10a",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208762/portfolio/adm4_zcm10a.png",
            important: true
          },
          {
            id: 2,
            name: "adm3_yfz0gy",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208758/portfolio/adm3_yfz0gy.png",
            important: false
          },
          {
            id: 3,
            name: "adm5_vewvgx",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208757/portfolio/adm5_vewvgx.png",
            important: false
          },
          {
            id: 4,
            name: "adm_uvhcig",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/adm_uvhcig.png",
            important: false
          },
          {
            id: 5,
            name: "adm2_hngwlb",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208756/portfolio/adm2_hngwlb.png",
            important: false
          }
        ],
        web_site: "https://adminpro-ng.herokuapp.com/login",
        album: [ 
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208762/portfolio/adm4_zcm10a.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208762/portfolio/adm4_zcm10a.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208762/portfolio/adm4_zcm10a.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208758/portfolio/adm3_yfz0gy.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208758/portfolio/adm3_yfz0gy.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208758/portfolio/adm3_yfz0gy.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208757/portfolio/adm5_vewvgx.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208757/portfolio/adm5_vewvgx.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208757/portfolio/adm5_vewvgx.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/adm_uvhcig.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/adm_uvhcig.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/adm_uvhcig.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208756/portfolio/adm2_hngwlb.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208756/portfolio/adm2_hngwlb.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208756/portfolio/adm2_hngwlb.png",
          },
        ]
      },
      {
        id: 4,
        title: "Spotify Clone",
        description: "Aprovecho el api rest de Spotify para crear una aplicación demo, la cual puedo reproducir música, buscar artistas, últimmos lanzamientos y más.",
        type: "Frontend",
        technologies: ["Angular 11"],
        images: [
          {
            id: 1,
            name: "spoti_dh9xzo",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610215422/portfolio/spoti_dh9xzo.png",
            important: true
          },
          {
            id: 2,
            name: "spoti2_bi05cr",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610215420/portfolio/spoti2_bi05cr.png",
            important: false
          },
          {
            id: 3,
            name: "spoti3_fegbs6",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610215420/portfolio/spoti3_fegbs6.png",
            important: false
          },
          {
            id: 4,
            name: "spoti4_yds0gx",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610215420/portfolio/spoti4_yds0gx.png",
            important: false
          },
        ],
        album: [ 
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610215422/portfolio/spoti_dh9xzo.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610215422/portfolio/spoti_dh9xzo.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610215422/portfolio/spoti_dh9xzo.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610215420/portfolio/spoti2_bi05cr.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610215420/portfolio/spoti2_bi05cr.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610215420/portfolio/spoti2_bi05cr.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610215420/portfolio/spoti3_fegbs6.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610215420/portfolio/spoti3_fegbs6.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610215420/portfolio/spoti3_fegbs6.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610215420/portfolio/spoti4_yds0gx.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610215420/portfolio/spoti4_yds0gx.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610215420/portfolio/spoti4_yds0gx.png",
          },
        ]
      },
      {
        id: 5,
        title: "Gráficos en tiempo real.",
        description: "Elección del mejor juego del año. Las gráficas se actualizan cuando votan en la siguiente página.",
        type: "Frontend y Backend",
        technologies: ["Angular 9", "Node js", "Express", "Firebase"],
        images: [
          {
            id: 1,
            name: "firebase_k5lgjd",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/firebase_k5lgjd.png",
            important: true
          },
          {
            id: 2,
            name: "firebase2_midc7g",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208768/portfolio/firebase2_midc7g.png",
            important: false
          },
          {
            id: 3,
            name: "firebase3_vmbdu6",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/firebase3_vmbdu6.png",
            important: false
          },
          {
            id: 4,
            name: "firebase4_kndlil",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/firebase4_kndlil.png",
            important: false
          },
        ],
        web_site: "https://graficas-ng.web.app/home",
        album: [ 
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/firebase_k5lgjd.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/firebase_k5lgjd.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/firebase_k5lgjd.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208768/portfolio/firebase2_midc7g.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208768/portfolio/firebase2_midc7g.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208768/portfolio/firebase2_midc7g.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/firebase3_vmbdu6.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/firebase3_vmbdu6.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/firebase3_vmbdu6.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/firebase4_kndlil.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/firebase4_kndlil.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/firebase4_kndlil.png",
          },
        ]
      },
      {
        id: 6,
        title: "Blog.",
        description: "Aplicación que permite crear, editar, buscar y eliminar publicaciones. Implentación de sistema de rutas con vue.",
        type: "Frontend y Backend",
        technologies: ["Vue", "Node js", "Express", "MongoDB"],
        images: [
          {
            id: 1,
            name: "blog-vue_k1sdug",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208762/portfolio/blog-vue_k1sdug.png",
            important: true
          },
          {
            id: 2,
            name: "blog-vue2_ppqpaq",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208763/portfolio/blog-vue2_ppqpaq.png",
            important: false
          },
          {
            id: 3,
            name: "blog-vue3_gig9yi",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208762/portfolio/blog-vue3_gig9yi.png",
            important: false
          },
          {
            id: 4,
            name: "blog-vue4_mqteof",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208763/portfolio/blog-vue4_mqteof.png",
            important: false
          },
        ],
        github: "https://github.com/ojacome/blog-vue",
        album: [ 
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208762/portfolio/blog-vue_k1sdug.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208762/portfolio/blog-vue_k1sdug.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208762/portfolio/blog-vue_k1sdug.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208763/portfolio/blog-vue2_ppqpaq.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208763/portfolio/blog-vue2_ppqpaq.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208763/portfolio/blog-vue2_ppqpaq.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208762/portfolio/blog-vue3_gig9yi.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208762/portfolio/blog-vue3_gig9yi.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208762/portfolio/blog-vue3_gig9yi.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208763/portfolio/blog-vue4_mqteof.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208763/portfolio/blog-vue4_mqteof.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208763/portfolio/blog-vue4_mqteof.png",
          },
        ]
      },
      {
        id: 7,
        title: "Blog.",
        description: "Aplicación que permite crear, editar, buscar y eliminar publicaciones. Gestión de imágenes.",
        type: "Frontend y Backend",
        technologies: ["React", "Node js", "Express", "MongoDB"],
        images: [
          {
            id: 1,
            name: "blog-rc_lr0wog",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208760/portfolio/blog-rc_lr0wog.png",
            important: true
          },
          {
            id: 2,
            name: "blog-rc2_gss2g0",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/blog-rc2_gss2g0.png",
            important: false
          },
          {
            id: 3,
            name: "blog-rc3_ereqbr",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208760/portfolio/blog-rc3_ereqbr.png",
            important: false
          },
          {
            id: 4,
            name: "blog-rc4_jxypqd",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208760/portfolio/blog-rc4_jxypqd.png",
            important: false
          },
        ],
        github: "https://github.com/ojacome/blog-react",
        album: [ 
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208760/portfolio/blog-rc_lr0wog.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208760/portfolio/blog-rc_lr0wog.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208760/portfolio/blog-rc_lr0wog.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/blog-rc2_gss2g0.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/blog-rc2_gss2g0.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208765/portfolio/blog-rc2_gss2g0.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208760/portfolio/blog-rc3_ereqbr.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208760/portfolio/blog-rc3_ereqbr.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208760/portfolio/blog-rc3_ereqbr.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208760/portfolio/blog-rc4_jxypqd.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208760/portfolio/blog-rc4_jxypqd.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208760/portfolio/blog-rc4_jxypqd.png",
          },
        ]
      },
      {
        id: 8,
        title: "MarketPlace",
        description: "Carrito de compras, manejo de roles, para el administrador el mantenimientos de los productos y categorias, para el usuario cliente comprar y pagar los productos por medio de PayPal",
        type: "Frontend y Backend",
        technologies: ["Auth0", "Blade", "Laravel", "MySql"],
        images: [
          {
            id: 1,
            name: "mark3_vfisle",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208759/portfolio/mark3_vfisle.png",
            important: true
          },
          {
            id: 2,
            name: "mark_vvhpae",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/mark_vvhpae.png",
            important: false
          },
          {
            id: 3,
            name: "mark2_qe3phn",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208759/portfolio/mark2_qe3phn.png",
            important: false
          },
          {
            id: 4,
            name: "mark5_ebyzmj",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208758/portfolio/mark5_ebyzmj.png",
            important: false
          },
          {
            id: 5,
            name: "mark4_aptgnh",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208756/portfolio/mark4_aptgnh.png",
            important: false
          },
        ],
        github: "https://github.com/ojacome/marketplace",
        album: [ 
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208759/portfolio/mark3_vfisle.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208759/portfolio/mark3_vfisle.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208759/portfolio/mark3_vfisle.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/mark_vvhpae.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/mark_vvhpae.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/mark_vvhpae.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208759/portfolio/mark2_qe3phn.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208759/portfolio/mark2_qe3phn.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208759/portfolio/mark2_qe3phn.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208758/portfolio/mark5_ebyzmj.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208758/portfolio/mark5_ebyzmj.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208758/portfolio/mark5_ebyzmj.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208756/portfolio/mark4_aptgnh.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208756/portfolio/mark4_aptgnh.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208756/portfolio/mark4_aptgnh.png",
          },
        ]
      },
      {
        id: 9,
        title: "Kiosco de Autoservicio",
        description: "Cliente: Conecel. Aplicativo muy amigable para el usuario, donde puede consultar toda información referente a su línea de teléfono, valores a pagar, consumo del mes y más.",
        type: "Aplicación de escritorio",
        technologies: [".NET", "WPF"],
        images: [
          {
            id: 1,
            name: "kiosco4_k0ukyd",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/kiosco4_k0ukyd.png",
            important: true
          },
          {
            id: 2,
            name: "kiosco5_inpqq7",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/kiosco5_inpqq7.png",
            important: false
          },
          {
            id: 3,
            name: "kiosco7_bezusp",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/kiosco7_bezusp.jpg",
            important: false
          },
          {
            id: 4,
            name: "kiosco2_smmwry",
            url: "https://res.cloudinary.com/ojacome/image/upload/v1610208772/portfolio/kiosco2_smmwry.jpg",
            important: false
          },
        ],
        album: [ 
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/kiosco4_k0ukyd.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/kiosco4_k0ukyd.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/kiosco4_k0ukyd.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/kiosco5_inpqq7.png",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/kiosco5_inpqq7.png",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/kiosco5_inpqq7.png",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/kiosco7_bezusp.jpg",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/kiosco7_bezusp.jpg",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208755/portfolio/kiosco7_bezusp.jpg",
          },
          {
            small: "https://res.cloudinary.com/ojacome/image/upload/v1610208772/portfolio/kiosco2_smmwry.jpg",
            medium: "https://res.cloudinary.com/ojacome/image/upload/v1610208772/portfolio/kiosco2_smmwry.jpg",
            big: "https://res.cloudinary.com/ojacome/image/upload/v1610208772/portfolio/kiosco2_smmwry.jpg",
          },
        ]
      },
    ]
  }

  
}
