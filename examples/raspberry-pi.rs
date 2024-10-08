use air_navigator_rs::{Navigator, PwmChannel};
use std::thread::sleep;
use std::time::Duration;

fn main() {
    println!("Creating your navigator module!");
    let mut nav = Navigator::new();

    println!("Setting up your navigator, ahoy!");
    nav.init();
    nav.set_pwm_enable(true);
    nav.set_pwm_freq_prescale(99);

    loop {
        nav.set_pwm_channel_value(PwmChannel::All, 0);
        println!("{:#?}", nav.fmt_debug());
        sleep(Duration::from_millis(1000));
    }
}
