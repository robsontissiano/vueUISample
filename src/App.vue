<template  lang='pug'>

.vdl-framework-left-nav__container.vdl-row
  .vdl-framework-left-nav__sidebar
    .section-2.vdl-hidden-lg-down
      .vdl-sidebar.sidebar
        .vdl-sidebar__menu
          .vdl-sidebar-item
            router-link(to='/').vdl-sidebar-item__container Home
              i.fa.fa-home
            router-link(to='/about').vdl-sidebar-item__container About
              i.fa.icon-portal-home
            router-link(to='/axios').vdl-sidebar-item__container Axios
              i.fa.icon-portal-home
            router-link(to='/vuex').vdl-sidebar-item__container Vuex
              i.fa.icon-portal-home
            router-link(to='/pug').vdl-sidebar-item__container Pug
              i.fa.icon-portal-home
  .vdl-framework-left-nav__page-container
    .section-3
      .vdl-search
        .vdl-search__container
      .vdl-framework-left-nav__page
        .vdl-framework-left-nav__content
          .ng-star-inserted
            .mason-container
              .vdl-col-sm-12.vdl-col-md-12.vdl-col-lg-12.mason-brick.ng-star-inserted
                .tile-layout__container
                  .ng-star-inserted
                    .vdl-tile.ng-star-inserted
                      .tile-container.tile-container--alternate
                        .tile-content
                          .vdl-row
                            router-view
</template>

<style lang="scss">
@import './assets/theme';

.fa {
  font-size: 1.70em
}
.sidebar{
  position: absolute;
}

</style>
