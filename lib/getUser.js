function getCurrentUser() {
    const email = Session.getActiveUser().getEmail();
    Logger.log("#####################################");
    Logger.log(email);

    const dotIndex = email.indexOf(".");
    const atIndex = email.indexOf("@");

    const firstName = email.substring(0, dotIndex);
    const lastName = email.substring(dotIndex + 1, atIndex);

    const name =
        firstName.charAt(0).toUpperCase() +
        firstName.slice(1) +
        " " +
        lastName.charAt(0).toUpperCase() +
        lastName.slice(1);

    Logger.log("#####################################");
    Logger.log(name);

    return {
        email,
        name
    }
}