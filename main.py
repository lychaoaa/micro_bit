def on_forever():
    if input.light_level() < 100:
        basic.clear_screen()
        basic.pause(500)
        basic.show_number(input.light_level())
        basic.clear_screen()
    elif input.light_level() < 200 and input.light_level() > 100:
        basic.clear_screen()
        basic.pause(500)
        basic.show_number(input.light_level())
        basic.clear_screen()
        basic.pause(500)
        basic.show_icon(IconNames.SAD)
        basic.clear_screen()
        basic.pause(500)
    elif input.light_level() < 300 and input.light_level() > 200:
        basic.clear_screen()
        basic.pause(500)
        basic.show_number(input.light_level())
        basic.clear_screen()
        basic.pause(500)
        basic.show_icon(IconNames.CONFUSED)
        basic.clear_screen()
        basic.pause(500)
    elif input.light_level() > 300:
        basic.show_icon(IconNames.ANGRY)
basic.forever(on_forever)
