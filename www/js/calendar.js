function Calendar(){
    Intent LaunchIntent = this.cordova.getActivity().getPackageManager().getLaunchIntentForPackage("com.rovio.angrybirds");
    this.cordova.getActivity().startActivity(LaunchIntent);
}