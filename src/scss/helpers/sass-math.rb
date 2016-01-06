require 'sass'

module Sass::Script::Functions

  module SassMath

    def pi()
      Sass::Script::Number.new(Math::PI)
    end
    Sass::Script::Functions.declare :pi, []

    def sin(number)
      trig(:sin, number)
    end
    Sass::Script::Functions.declare :sin, [:number]

    def cos(number)
      trig(:cos, number)
    end
    Sass::Script::Functions.declare :cos, [:number]

    def tan(number)
      trig(:tan, number)
    end
    Sass::Script::Functions.declare :tan, [:number]

    def exp(number)
      math(:exp, number)
    end
    Sass::Script::Functions.declare :exp, [:number]

    def log(number)
      math(:log, number)
    end
    Sass::Script::Functions.declare :log, [:number]

    def pow(number, exponent)
      power(:pow, number, exponent)
    end
    Sass::Script::Functions.declare :pow, [:number, :exponent]

    private

    def trig(operation, number)
      if number.numerator_units == ['deg'] && number.denominator_units == []
        Sass::Script::Number.new(Math.send(operation, Math::PI * number.value / 180))
      else
        Sass::Script::Number.new(Math.send(operation, number.value), number.numerator_units, number.denominator_units)
      end
    end

    def math(operation, number)
      Sass::Script::Number.new(Math.send(operation, number.value))
    end

    def power(operation, number, exponent)
      Sass::Script::Number.new(number.value ** exponent.value)
    end

  end

  include SassMath

end