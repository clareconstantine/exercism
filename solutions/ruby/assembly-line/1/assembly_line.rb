class AssemblyLine
  CARS_PER_HOUR_PER_UNIT_SPEED = 221
  MINUTES_PER_HOUR = 60

  def initialize(speed)
    @speed = speed
  end

  def production_rate_per_hour
    @speed * CARS_PER_HOUR_PER_UNIT_SPEED * success_rate
  end

  def working_items_per_minute
    production_rate_per_hour.floor / MINUTES_PER_HOUR
  end

  private

  def success_rate
    if @speed >= 1 && @speed <= 4
      return 1
    elsif @speed >= 5 && @speed <= 8
      return 0.9
    elsif @speed == 9
      return 0.8
    elsif @speed == 10
      return 0.77
    else
      return 0
    end
  end
end
