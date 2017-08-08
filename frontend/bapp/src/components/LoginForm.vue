<template>
  <div class="ui middle aligned center aligned grid" id="login">
  <div class="column">
    <form action="https://s.codepen.io/voltron2112/debug/PqrEPM?" method="get" class="ui large form">
      <div class="ui stacked secondary  segment">
        <h2 class="ui image header">
          <div class="content">
            Behavior Mangement System
          </div>
        </h2>
        <div class="field" id="top-login-seg">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="username" placeholder="Username">
          </div>
        </div>
        <div class="field" id="bot-login-seg">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password">
          </div>
        </div>
        <div class="ui fluid large submit button" id="large-button">Login</div>
      </div>
      <div class="ui error message"></div>
    </form>
  </div>
</div>
</template>

<script type = "text/javascript" >

export default {

}
</script>
<style>
#login{
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}
#top-login-seg{
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;

}
#bot-login-seg{
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
}
#large-button{
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
}
</style>
