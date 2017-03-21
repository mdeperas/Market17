export default function transition($transitions) {
      $transitions.onBefore({to: 'restricted.*'}, (transition) => {
          let principalService = transition.injector().get('PrincipalService');
          
          console.log(principalService.isLoggedIn);
          if(principalService.isLoggedIn)
          {
            console.log('wszedlem');
              return true;
          }

          return transition.router.stateService.target('free.login');
      })
};