class LogLineParser
  ERROR = 'error'
  WARNING = 'warning'
  INFO = 'info'
  
  def initialize(line)
    @line = line
  end

  def message
    @line.split(':')[1].strip
  end

  def log_level
    return ERROR if @line.downcase.include?(ERROR)
    return WARNING if @line.downcase.include?(WARNING)
    return INFO if @line.downcase.include?(INFO)
  end

  def reformat
    "#{message} (#{log_level})"
  end
end
