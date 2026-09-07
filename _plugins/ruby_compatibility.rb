# Ruby 3.2+ compatibility fix for older Jekyll/Liquid
unless Object.method_defined?(:tainted?)
  class Object
    def tainted?
      false
    end
    def taint
      self
    end
    def untaint
      self
    end
  end
end
