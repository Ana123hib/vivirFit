import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./ModuloRegistro/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./ModuloRegistro/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./ModuloRegistro/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./ModuloRegistro/recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'nueva-contrasena',
    loadChildren: () => import('./ModuloRegistro/nueva-contrasena/nueva-contrasena.module').then( m => m.NuevaContrasenaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./usuario/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./usuario/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: 'cambiar-contrasena',
    loadChildren: () => import('./usuario/cambiar-contrasena/cambiar-contrasena.module').then( m => m.CambiarContrasenaPageModule)
  },
  {
    path: 'rutinas',
    loadChildren: () => import('./ModuloRutinas/rutinas/rutinas.module').then( m => m.RutinasPageModule)
  },
  {
    path: 'nueva-rutina',
    loadChildren: () => import('./ModuloRutinas/nueva-rutina/nueva-rutina.module').then( m => m.NuevaRutinaPageModule)
  },
  {
    path: 'salud',
    loadChildren: () => import('./ModulosSalud/salud/salud.module').then( m => m.SaludPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./ModuloBlog/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'blog-contenido',
    loadChildren: () => import('./ModuloBlog/blog-contenido/blog-contenido.module').then( m => m.BlogContenidoPageModule)
  },
  {
    path: 'ganados',
    loadChildren: () => import('./puntos/ganados/ganados.module').then( m => m.GanadosPageModule)
  },
  {
    path: 'perdidos',
    loadChildren: () => import('./puntos/perdidos/perdidos.module').then( m => m.PerdidosPageModule)
  },
  {
    path: 'canje',
    loadChildren: () => import('./Modulo-canjear/canje/canje.module').then( m => m.CanjePageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./ModuloHome/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'contenido-de-canje',
    loadChildren: () => import('./Modulo-canjear/contenido-de-canje/contenido-de-canje.module').then( m => m.ContenidoDeCanjePageModule)
  },
  {
    path: 'buscar-rutina',
    loadChildren: () => import('./ModuloRutinas/buscar-rutina/buscar-rutina.module').then( m => m.BuscarRutinaPageModule)
  },
  {
    path: 'rutina-puntos-ganados',
    loadChildren: () => import('./ModuloRutinas/rutina-puntos-ganados/rutina-puntos-ganados.module').then( m => m.RutinaPuntosGanadosPageModule)
  },
  {
    path: 'rutina-completada',
    loadChildren: () => import('./ModuloRutinas/rutina-completada/rutina-completada.module').then( m => m.RutinaCompletadaPageModule)
  },
  {
    path: 'rutina-cronometro',
    loadChildren: () => import('./ModuloRutinas/rutina-cronometro/rutina-cronometro.module').then( m => m.RutinaCronometroPageModule)
  },
  {
    path: 'rutina-elegida',
    loadChildren: () => import('./ModuloRutinas/rutina-elegida/rutina-elegida.module').then( m => m.RutinaElegidaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
