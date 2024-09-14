searchState.loadedDescShard("i2cdev", 0, "i2cdev\nCore I2C abstractions\nLinux I2C device support\nMock I2C device\nError type\nI2C transfer error type\nInterface to an I2C Slave Device from an I2C Master\nRead/Write I2C message\nInterface to an I2C Bus from an I2C Master\nI2C transfer message type\nRead data from the device to fill the provided slice\nRead data from device\nSelect a register, send 1 to 31 bytes of data to it, and …\nSelect a register, send 16 bits of data to it, and read 16 …\nRead a block of up to 32 bytes from a device\nRead a single byte from a device, without specifying a …\nRead a single byte from a device, from a designated …\nRead a block of up to 32 bytes from a device\nRead 2 bytes from a given register on a device (lsb first)\nWrite a block of up to 32 bytes to a device\nWrite a single byte to a device, without specifying a …\nWrite a single byte to a specific register on a device\nWrite a block of up to 32 bytes from a device\nThis sends a single bit to the device, at the place of the …\nWrite 2 bytes to a given register on a device (lsb first)\nPerforms multiple serially chained I2C read/write …\nWrite the provided buffer to the device\nWrite data to device\nVarious flags used by the i2c_rdwr ioctl on Linux. For …\nForce message to ignore acknowledgement\nForce this message to ignore I2C negative acknowlegements\nIf you need to invert a ‘read’ command bit to a ‘…\nInput/output error\nLinux I2C bus\nConcrete linux I2C device\nLinux I2C errors\nLinux I2C message\nAvoid sending an I2C start condition on this message\nOS error\nRead data, from slave to master\nForce an I2C stop condition on this message\nUse ten bit addressing on this message\nAllow the client to specify how many bytes it will send\nReturns the set containing all flags.\nReturns the intersection between the two sets of flags.\nDisables all flags disabled in the set.\nReturns the union of the two sets of flags.\nAdds the set of flags.\nReturns the raw value of the flags currently stored.\nReturns the left flags, but with all the right flags …\nToggles the set of flags.\nReturns the complement of this set of flags.\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nReturns an empty set of flags.\nCreate a new I2CDevice for the specified path, without …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, preserving all …\nInserts the specified flags in-place.\nReturns the intersection between the flags in <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if all flags are currently set.\nReturns <code>true</code> if no flags are currently stored.\nCreate a new I2CDevice for the specified path\nCreate a new LinuxI2CBus for the specified path\nReturns the complement of this set of flags.\nRead data from the device to fill the provided slice\nRemoves the specified flags in-place.\nInserts or removes the specified flags depending on the …\nSet the slave address for this device\nEnable/Disable PEC support for this device\nSelect a register, send 1 to 31 bytes of data to it, and …\nSelect a register, send 16 bits of data to it, and read 16 …\nRead a block of up to 32 bytes from a device\nRead a single byte from a device, without specifying a …\nRead a single byte from a device, from a designated …\nRead a block of up to 32 bytes from a device via …\nRead 2 bytes form a given register on a device\nWrite a block of up to 32 bytes to a device\nWrite a single byte to a sdevice, without specifying a …\nWrite a single byte to a specific register on a device\nWrite a block of up to 32 bytes from a device via …\nThis sends a single bit to the device, at the place of the …\nWrite 2 bytes to a given register on a device\nReturns the set difference of the two sets of flags.\nDisables all flags enabled in the set.\nReturns the symmetric difference between the flags in <code>self</code> …\nToggles the specified flags in-place.\nIssue the provided sequence of I2C transactions\nIssue the provided sequence of I2C transactions\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nSet the target device address for the message\nSet optional message flags\nWrite the provided buffer to the device\nContains the error value\nMock I2C device register map\nI2C mock result type\nMock I2C device exposing a register map\nMock I2C message\nContains the success value\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate new mock I2C register map\nCreate a new mock I2C device\nI2C register map\nIssue the provided sequence of I2C transactions\nWrite data to device\nSet several registers starting at the given offset")